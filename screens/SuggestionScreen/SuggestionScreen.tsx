import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import * as Location from 'expo-location';

import styles from './styles';
import Colors from '../../constants/Colors';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import ResultCard from '../../components/ResultCard/ResultCard';
import { AppContext } from '../../utils/Context/Context';

type Coords = {
  latitude: number;
  longitude: number;
};

const SuggestionScreen = () => {
  const { state, dispatch } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState<Coords | undefined>(undefined);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location?.coords);
  };

  useEffect(() => {
    getLocation();
    console.log(state);
    const likedFoods = state.userPreferences.filter(ele => ele.isLiked);
    const selectedFoodCategory =
      likedFoods[Math.floor(Math.random() * likedFoods.length)].category;
    // const query = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?parameters?key=${Constants.manifest?.extra?.gMapsApiKey}`
    const query = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=restaurant&inputtype=textquery&key=${Constants.manifest?.extra?.gMapsApiKey}`;
    fetch(query)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => {
        console.log(err);
      });
  }, [state.userPreferences]);

  const onImageLoad = () => {
    setIsLoading(false);
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
          title="Hop Doddie"
          rating={3.5}
          distance={5}
          dollarSign="$$"
          description="Sample descriptive info..."
          onImageLoad={onImageLoad}
        />
        <View style={styles.tryAgainBlock}>
          <Text style={styles.tryAgainText}>Try again</Text>
          <Ionicons name="refresh-outline" size={24} color={Colors.primary} />
        </View>
      </>
    </SafeAreaView>
  );
};

export default SuggestionScreen;
