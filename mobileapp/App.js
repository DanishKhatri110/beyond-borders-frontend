// App.js
import React,{useEffect} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Constants from 'expo-constants';
import AppNavigator from './navigation/AppNavigator';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen'; 



export default function App() {
  useEffect(
    () => {
    SplashScreen.hideAsync(); 
  })
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <AppNavigator />
    </View>  
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: hp('100%'), 
    width: wp('100%'), 
    marginTop:Constants.statusBarHeight,
  },
});