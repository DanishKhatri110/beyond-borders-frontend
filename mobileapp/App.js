// App.js
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Constants from 'expo-constants';
import AppNavigator from './navigation/AppNavigator';
import VoiceModeScreen1 from './screens/VoiceModeScreen1';


export default function App() {
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:Constants.statusBarHeight,
  },
});