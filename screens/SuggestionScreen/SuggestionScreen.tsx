import React, { useContext, useEffect, useState } from 'react';
import {
  ActivityIndicator,
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

const SuggestionScreen = ({ navigation }: Props) => {
  const { state, dispatch } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState<Coords | undefined>(undefined);
  const [recommendedRetaurantInfo, setRecommendedRestarurantInfo] =
    useState(undefined);
  const [photoUrl, setPhotoUrl] = useState('');

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      // TODO: Design error state
      console.log('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location?.coords);
  };

  const makeRestaurantDecision = async () => {
    if (location) {
      const query1 = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=mexicane&location=${location?.latitude}%2C${location?.longitude}&radius=10000&type=restaurant&opennow&key=${Constants.manifest?.extra?.gMapsApiKey}`;
      const restaurantsResponse = await fetch(query1)
        .then(response => response.json())
        .then(json => {
          return json.results;
        })
        .catch(err => {
          console.log(err);
        });

      const placeId = restaurantsResponse[0].place_id;
      const query2 = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&&key=${Constants.manifest?.extra?.gMapsApiKey}`;
      const recommendedRetaurantInfo = await fetch(query2)
        .then(response => response.json())
        .then(json => {
          setRecommendedRestarurantInfo(json.result);
        });
    }
  };

  useEffect(() => {
    makeRestaurantDecision();
  }, [location]);

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    setPhotoUrl(
      `https://maps.googleapis.com/maps/api/place/photo?photo_reference=${recommendedRetaurantInfo?.photos[0].photo_reference}&maxheight=600&maxhidth=800&key=${Constants.manifest?.extra?.gMapsApiKey}`
    );
  }, [recommendedRetaurantInfo]);

  const onImageLoad = () => {
    setIsLoading(false);
  };

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

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  const getClosingTime = () => {
    if (recommendedRetaurantInfo?.opening_hours?.weekday_text) {
      const date = new Date().getDay();
      const openHours = recommendedRetaurantInfo?.opening_hours?.weekday_text;
      const lastDate = openHours.pop();
      openHours.unshift(lastDate);
      const currentDayOpenHours = openHours[date];
      const closingTime =
        currentDayOpenHours.split(' – ')[
          currentDayOpenHours.split(' – ').length - 1
        ];
      return closingTime;
    }
  };

  const handleTryAgainPress = () => {
    const refreshImagesAndRedirect = async () => {
      const images = await API.getRandomImages();
      dispatch({ type: 'addImages', payload: images });
      navigation.navigate('PreferenceSelectorScreen');
    };

    refreshImagesAndRedirect();
  };

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <>
          <View style={[styles.container, styles.absolute]}>
            <LoadingSpinner />
            <Text style={styles.loadingText}>Generating Results</Text>
          </View>
        </>
      ) : null}
      <>
        <ResultCard
          title={recommendedRetaurantInfo?.name}
          rating={recommendedRetaurantInfo?.rating}
          distance={getDistanceFromLatLon(
            recommendedRetaurantInfo?.geometry?.location.lat,
            recommendedRetaurantInfo?.geometry?.location.lng,
            location?.latitude,
            location?.longitude
          )}
          imageUrl={photoUrl}
          closingTime={getClosingTime()}
          priceLevel={recommendedRetaurantInfo?.price_level}
          // description="Sample descriptive info..."
          onImageLoad={onImageLoad}
        />
        <Pressable style={styles.tryAgainBlock} onPress={handleTryAgainPress}>
          <Text style={styles.tryAgainText}>Try again</Text>
          <Ionicons name="refresh-outline" size={24} color={Colors.primary} />
        </Pressable>
      </>
    </SafeAreaView>
  );
};

export default SuggestionScreen;
