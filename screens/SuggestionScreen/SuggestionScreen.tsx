import React, { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

import styles from './styles';
import Colors from '../../constants/Colors';

const SuggestionScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <>
          <LoadingSpinner />
          <Text style={styles.loadingText}>Generating Results</Text>
        </>
      ) : (
        <>
          <Text>Results go here</Text>
          <View style={styles.tryAgainBlock}>
            <Text style={styles.tryAgainText}>Try again</Text>
            <Ionicons name="refresh-outline" size={24} color={Colors.primary} />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default SuggestionScreen;
