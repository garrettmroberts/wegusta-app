import { useState } from 'react';
import { ActivityIndicator, SafeAreaView, Text } from 'react-native';

import styles from './styles';

const SuggestionScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <>
          <ActivityIndicator size="large" />
          <Text>Generating Results</Text>
        </>
      ) : (
        <Text>Reults go here</Text>
      )}
    </SafeAreaView>
  );
};

export default SuggestionScreen;
