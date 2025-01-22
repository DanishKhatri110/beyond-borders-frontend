// App.js
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Constants from 'expo-constants';
import AppNavigator from './navigation/AppNavigator';
import LanguageScreen from './screens/LanguageScreen';
import MeetingOptionsScreen from './screens/MeetingOptionsScreen';
import ChatScreen from './screens/ChatScreen';
// import LoginScreen from './screens/LoginScreen';
// import HomeScreen from './screens/HomeScreen';
// import SignupScreen from './screens/SignupScreen';
// import SignupDetails from './screens/SignupDetails';
// import SplashScreen from './screens/SplashScreen';


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

{/* <LoginScreen/>*/}
{/* <SplashScreen /><MeetingOptionsScreen/><AppNavigator /> <LanguageScreen /><SignupDetails/><HomeScreen/> */}