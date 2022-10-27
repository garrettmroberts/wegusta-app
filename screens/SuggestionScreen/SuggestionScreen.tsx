import React, { useContext, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Button,
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
  const [recommendedRestaurantInfo, setRecommendedRestarurantInfo] =
    useState(undefined);
  const [photoUrl, setPhotoUrl] = useState('');
  const [error, setError] = useState(false);

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

  const generateRandomNumber = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  const selectFoodCategory = () => {
    const rand = generateRandomNumber(state.userPreferences.length);
    const filteredPreferences = state.userPreferences.filter(
      preference => preference.isLiked
    );
    if (filteredPreferences.length === 0) {
      setError(true);
      setIsLoading(false);
      return null;
    }
    return filteredPreferences[rand].category;
  };

  const queryForRestaurant = async (category: string) => {
    let finalResult = null;
    for (let i = 10000; i <= 30000; i += 10000) {
      const query = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=${category}&location=${location?.latitude}%2C${location?.longitude}&radius=10000&type=restaurant&opennow&key=${Constants.manifest?.extra?.gMapsApiKey}`;
      const result = await fetch(query)
        .then(response => response.json())
        .then(json => {
          if (json.status !== 'ZERO_RESULTS') {
            const rand = generateRandomNumber(
              json.results.length > 5 ? 5 : json.results.length
            );
            finalResult = json.results[rand].place_id;
            return;
          }
        });
    }
    return finalResult;
  };

  const queryForRestaurantDetails = async (placeId: string) => {
    const query = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=formatted_address,name,opening_hours,price_level,rating,photos,geometry&key=${Constants.manifest?.extra?.gMapsApiKey}`;
    await fetch(query)
      .then(response => response.json())
      .then(json => {
        const recommendedRestaurantInfo = {
          address: json.result.formatted_address,
          name: json.result.name,
          openTimes: json.result.opening_hours.weekday_text,
          priceLevel: json.result.price_level,
          rating: json.result.rating,
          photos: json.result.photos,
          geometry: json.result.geometry
        };
        setRecommendedRestarurantInfo(recommendedRestaurantInfo);
      });
  };

  const makeRestaurantDecision = async () => {
    if (location) {
      const category = selectFoodCategory();
      if (category !== null) {
        const restaurantId = await queryForRestaurant(category);
        if (restaurantId) {
          queryForRestaurantDetails(restaurantId);
        } else {
          setError(true);
          setIsLoading(false);
        }
      }
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
      `https://maps.googleapis.com/maps/api/place/photo?photo_reference=${recommendedRestaurantInfo?.photos[0].photo_reference}&maxheight=600&maxhidth=800&key=${Constants.manifest?.extra?.gMapsApiKey}`
    );
  }, [recommendedRestaurantInfo]);

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

  function deg2rad(deg: number) {
    return deg * (Math.PI / 180);
  }

  const getClosingTime = () => {
    if (recommendedRestaurantInfo?.openTimes) {
      const date = new Date().getDay();
      const openHours = recommendedRestaurantInfo?.openTimes;
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
      {error ? (
        <>
          <Text>We couldn't find any results with the given criteria!</Text>
          <Button title="Try again?" onPress={handleTryAgainPress} />
        </>
      ) : (
        <>
          <ResultCard
            title={recommendedRestaurantInfo?.name}
            rating={recommendedRestaurantInfo?.rating}
            distance={getDistanceFromLatLon(
              recommendedRestaurantInfo?.geometry?.location.lat,
              recommendedRestaurantInfo?.geometry?.location.lng,
              location?.latitude,
              location?.longitude
            )}
            imageUrl={photoUrl}
            closingTime={getClosingTime()}
            priceLevel={recommendedRestaurantInfo?.priceLevel}
            latitude={recommendedRestaurantInfo?.geometry?.location?.lat}
            longitude={recommendedRestaurantInfo?.geometry?.location?.lng}
            // description="Sample descriptive info..."
            onImageLoad={onImageLoad}
          />
          <Pressable style={styles.tryAgainBlock} onPress={handleTryAgainPress}>
            <Text style={styles.tryAgainText}>Try again</Text>
            <Ionicons name="refresh-outline" size={24} color={Colors.primary} />
          </Pressable>
        </>
      )}
    </SafeAreaView>
  );
};

export default SuggestionScreen;
