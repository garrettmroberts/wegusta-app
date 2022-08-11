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
      // TODO: Design error state
      console.log('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location?.coords);
  };

  const makeRestaurantDecision = async () => {
    if (location) {
      const query = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=mexicane&location=${location?.latitude}%2C${location?.longitude}&radius=10000&type=restaurant&opennow&key=${Constants.manifest?.extra?.gMapsApiKey}`;
      fetch(query)
        .then(response => response.json())
        .then(json => {
          const placeId = json.results[0].place_id;
          const query = `https://maps.googleapis.com/maps/api/place/details/json?fields=name%2Crating%2Copening_hours%2Cformatted_address%2Cgeometry&place_id=${placeId}&&key=${Constants.manifest?.extra?.gMapsApiKey}`;
          fetch(query)
            .then(response => response.json())
            .then(json => {
              console.log(json.result);
            });
        })
        .catch(err => {
          console.log(err);
        });
      console.log(query);
    }
  };

  useEffect(() => {
    makeRestaurantDecision();
  }, [location]);

  useEffect(() => {
    getLocation();
  }, []);

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
