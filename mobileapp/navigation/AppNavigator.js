// navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import HomeScreen from '../screens/HomeScreen'
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import SignupDetails from '../screens/SignupDetails';
import LanguageScreen from '../screens/LanguageScreen';
import MeetingOptionsScreen from '../screens/MeetingOptionsScreen';
import SelectModeScreen from '../screens/SelectModeScreen';
import MeetingCodeScreen from '../screens/MeetingCodeScreen';
import ChatScreen from '../screens/ChatScreen';
import VoiceModeScreen from '../screens/VoiceModeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
// Import other screens here

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignupDetails" component={SignupDetails} />
        <Stack.Screen name="LanguageSelect" component={LanguageScreen} />
        <Stack.Screen name="MeetingOptions" component={MeetingOptionsScreen} />
        <Stack.Screen name="SelectMode" component={SelectModeScreen} />
        <Stack.Screen name="MeetingCode" component={MeetingCodeScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        {/* <Stack.Screen name="ChatScreen" component={ChatScreen} /> */}
        <Stack.Screen name="VoiceModeScreen" component={VoiceModeScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        {/* Add other screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
