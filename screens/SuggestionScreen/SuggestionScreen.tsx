import { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, Text } from 'react-native';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

import styles from './styles';

const SuggestionScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {}, 1000);
    setIsLoading(false);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <>
          <LoadingSpinner />
          <Text style={styles.loadingText}>Generating Results</Text>
        </>
      ) : (
        <Text>Results go here</Text>
      )}
    </SafeAreaView>
  );
};

export default SuggestionScreen;
