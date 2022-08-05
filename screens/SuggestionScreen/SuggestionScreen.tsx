import React, { useState } from 'react';
import { ActivityIndicator, SafeAreaView, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';
import Colors from '../../constants/Colors';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import ResultCard from '../../components/ResultCard/ResultCard';

const SuggestionScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

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
