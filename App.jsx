import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from './app/utils/Context';
import HomeScreen from './app/screens/HomeScreen';



export default function App() {
  return (
    <Context>
      <HomeScreen />
    </Context>
  );
}