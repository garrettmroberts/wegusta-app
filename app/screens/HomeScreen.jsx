import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useStoreContext } from '../utils/Context';


export default function HomeScreen() {
  const [state, dispatch] = useStoreContext();

  return (
      <View style={styles.container} >
        <Text>{ state.text }</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
