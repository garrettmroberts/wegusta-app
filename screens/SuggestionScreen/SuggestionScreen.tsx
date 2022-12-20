import React, { useContext, useEffect, useState } from 'react';
import {
  AppState,
  Linking,
  Modal,
  Pressable,
  SafeAreaView,
  Text,
  View
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import * as Location from 'expo-location';

import styles from './styles';
import Colors from '../../constants/Colors';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import ResultCard from '../../components/ResultCard/ResultCard';
import { AppContext } from '../../utils/Context/Context';
import API from '../../api';

type Coords = {
  latitude: number;
  longitude: number;
};

type Props = {
  navigation: any;
};

type RecommendedRestaurantInfo = {
  place_id?: String,
  name?: String,
  rating?: String,
  location?: {
    lat?: String,
    lng?: String
  },
  photoUrl?: String,
  priceLevel?: String,
  closingTime?: String
}

type SuggestionScreenState = {
  pageState: 'loading' | 'error' | 'needsLocationAccess' | 'success',
  location: Coords | undefined,
  recommendedRestaurantInfo: RecommendedRestaurantInfo,
  needsLocationAccess: boolean
}

const SuggestionScreen = ({ navigation }: Props) => {
  const { context, dispatch } = useContext(AppContext);
  const [state, setState] = useState<SuggestionScreenState>({
    pageState: 'loading', // loading, error, needsLocationAccess, success
    location: undefined,
    recommendedRestaurantInfo: {},
    needsLocationAccess: false
  });

  // LOCATION SERVICES
  // -------------------------------------------------------------------
  // Returns locationAccessStatus, also requests permission if applicable.
  const getLocationAccessStatus = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'denied') return false;
    if (status === 'granted') return true;
    console.error('ERROR: unexpected location status:', status)
    return status;
  }

  const getLocationCoordinates = async () => {
    const hasLocationAccess = await getLocationAccessStatus();
    if (hasLocationAccess) {
      let location = await Location.getCurrentPositionAsync({});
      setState({...state, location: location?.coords});
      return;
    } else {
      setState({...state, needsLocationAccess: true});
    };
  };

  const attemptgetLocation = async () => {
    const hasLocationAccess = await getLocationAccessStatus();
    if (!hasLocationAccess) {
      setState({...state, needsLocationAccess: true})
    } else {
      getLocationCoordinates();
    }
  }

  const getLocationAccessViaSettings = async () => {
    await Linking.openURL('app-settings:');
    const listener = AppState.addEventListener('change', (nextAppState) => {
      const executeNextStep = async () => {
        if (nextAppState === 'active') {
          const isLocationAccessGranted = await getLocationAccessStatus();
          if (isLocationAccessGranted) {
            setState({...state, needsLocationAccess: false})
          }
        }
      }

      executeNextStep();
    })
  }

  // -------------------------------------------------------------------


  // RESTAURANT RECOMMENDATION SERVICES
  // -------------------------------------------------------------------
  const generateRandomNumber = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  const selectFoodCategory = () => {
    const filteredPreferences = context.userPreferences.filter(
      preference => preference.isLiked
    );

    const rand = generateRandomNumber(filteredPreferences.length);

    if (filteredPreferences.length === 0) {
      return null;
    }

    return filteredPreferences[rand].category;
  };

  const queryForRestaurant = async (category: string) => {
    let recommendedRestaurantInfo = {};
      const query = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=${category}&location=${state.location?.latitude}%2C${state.location?.longitude}&radius=${context.filterOptions.filterDistance * 1000}&type=restaurant&opennow&key=${Constants.expoConfig?.extra?.gMapsApiKey}`;
      const result = await fetch(query)
        .then(response => {
          return response.json();
        })
        .then(json => {
          if (json.status !== 'ZERO_RESULTS') {
            const rand = generateRandomNumber(
              json.results.length > 5 ? 5 : json.results.length
            );
            const result = json.results[rand];
            recommendedRestaurantInfo = {
              place_id: result.place_id,
              name: result.name,
              openTimes: result.opening_hours,
              priceLevel: result.price_level,
              rating: result.rating,
              photoUrl: `https://maps.googleapis.com/maps/api/place/photo?photo_reference=${result.photos[0].photo_reference}&maxheight=600&maxhidth=800&key=${Constants.expoConfig?.extra?.gMapsApiKey}`,
              location: {
                lat: result.geometry.location.lat,
                lng: result.geometry.location.lng
              }
            };
            return recommendedRestaurantInfo;
          } else {
            setState({
              ...state,
              pageState: 'error'
            })
          }
        });
    return recommendedRestaurantInfo;
  };

  const queryForOpeningHours = async (placeId: string) => {
    let res = '';
    const query = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=opening_hours&key=${Constants.expoConfig?.extra?.gMapsApiKey}`;
    await fetch(query)
      .then(response => response.json())
      .then(json => {
        const date = new Date().getDay();
        const openHours = json.result.opening_hours.weekday_text;
        const lastDate = openHours.pop();
        openHours.unshift(lastDate);
        const currentDayOpenHours = openHours[date];
        res = currentDayOpenHours.split(' – ')[1];
      });
      return res;
  };

  const makeRestaurantDecision = async () => {
    const hasLocationAccess = await getLocationAccessStatus();
    if (hasLocationAccess) {
      const category = selectFoodCategory();
      if (category !== null) {
        const recommendedRestaurantInfo = await queryForRestaurant(category);
        const closingTime = await queryForOpeningHours(recommendedRestaurantInfo.place_id);
        setState({
          ...state,
          recommendedRestaurantInfo: {
            ...recommendedRestaurantInfo,
            closingTime
          }
        })
      } else {
        setState({...state, pageState: 'error'});
      }
    }
  };
  // -------------------------------------------------------------------

  useEffect(() => {
    if (state.recommendedRestaurantInfo?.place_id && state.recommendedRestaurantInfo?.closingTime) {
      setState({...state, pageState: 'success'})
    }
  }, [state.recommendedRestaurantInfo])

  useEffect(() => {
    if (state.location) makeRestaurantDecision();
  }, [state.location]);

  useEffect(() => {
    attemptgetLocation()
  }, []);

  const getDistanceFromLatLon = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ) => {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return (d / 1.609).toFixed(2); // Distance in mi
  };

  function deg2rad(deg: number) {
    return deg * (Math.PI / 180);
  }

  const handleTryAgainPress = () => {
    const refreshImagesAndRedirect = async () => {
      const images = await API.getRandomImages();
      dispatch({ type: 'addImagesAndRefreshState', payload: images });
      navigation.navigate('PreferenceSelectorScreen');
    };

    refreshImagesAndRedirect();
  };


  return (
    <SafeAreaView style={styles.container}>
      {(state.pageState === 'loading') ? (
        <>
          <View style={[styles.container, styles.absolute]}>
            <LoadingSpinner />
            <Text style={styles.loadingText}>Generating Results</Text>
          </View>
        </>
      ) : null}
      {(state.needsLocationAccess) ? (
        <View style={styles.container}>
          <Modal 
          animationType="slide"
          transparent={true}
          visible={state.needsLocationAccess}
          onRequestClose={() => {
            setState({...state, pageState: 'loading'});
          }}>
            <View style={[styles.container, styles.absolute, styles.locationServicesPlacement]}>
              <Pressable style={styles.locationServicesCloseButton} onPress={() => {
                setState({...state, needsLocationAccess: false, pageState: 'error'})
              }}>
                <Ionicons name="close" size={16} color="black" />
              </Pressable>
              <View style={styles.locationServicesIcon}>
                <Ionicons name="ios-location-sharp" size={36} color={Colors.secondary} />
              </View>
              <Text style={styles.locationServicesHeader}>Enable Location Services</Text>
              <Text style={styles.locationServicesSubheader}>We will need your location to provide you a better app experience.</Text>
            </View>
            <Pressable style={[styles.actionButton, styles.locationServicesPrimaryButton]} onPress={() => {
              getLocationAccessViaSettings();
            }}>
              <Text style={styles.locationServicesPrimaryButtonText}>Enable</Text>
            </Pressable>
            <Pressable style={[styles.actionButton, styles.locationServicesSecondaryButton]}>
              <Text style={styles.locationServicesSecondaryButtonText} onPress={() => {
                setState({...state, needsLocationAccess: false, pageState: 'error'})
              }}>Not now</Text>
            </Pressable>
          </Modal>
        </View>
      ) : null}
      {(state.pageState === 'error') ? (
        <>
          <Text style={styles.errorText}>No Results Found.</Text>
          <Pressable style={styles.tryAgainBlock} onPress={handleTryAgainPress}>
            <Text style={styles.tryAgainText}>Try again</Text>
            <Ionicons name="refresh-outline" size={24} color={Colors.primary} />
          </Pressable>
        </>
      ) : null}
      {(state.pageState === 'success') ? (
        <>
          <View style={styles.resultCardWrapper}>
            <ResultCard
              title={state.recommendedRestaurantInfo?.name}
              rating={state.recommendedRestaurantInfo?.rating}
              distance={getDistanceFromLatLon(
                state.recommendedRestaurantInfo?.location?.lat,
                state.recommendedRestaurantInfo?.location?.lng,
                state.location?.latitude,
                state.location?.longitude
              )}
              imageUrl={state.recommendedRestaurantInfo?.photoUrl}
              closingTime={state.recommendedRestaurantInfo?.closingTime}
              priceLevel={state.recommendedRestaurantInfo?.priceLevel}
              latitude={state.recommendedRestaurantInfo?.location?.lat}
              longitude={state.recommendedRestaurantInfo?.location?.lng}
              // description="Sample descriptive info..."
              // onImageLoad={onImageLoad}
            />
          </View>
          <Pressable style={styles.tryAgainBlock} onPress={handleTryAgainPress}>
            <Text style={styles.tryAgainText}>Try again</Text>
            <Ionicons name="refresh-outline" size={24} color={Colors.primary} />
          </Pressable>
        </>
      ) : null}
    </SafeAreaView>
  );
};

export default SuggestionScreen;
