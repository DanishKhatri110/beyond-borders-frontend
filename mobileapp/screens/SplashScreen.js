// screens/SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000); // 3 seconds delay
  }, [navigation]);
  
  return (
    <View style={styles.container}>
      <Image source={require('../assets/splash.png')} style={styles.logo} />
      <Text style={[styles.title]}>BeYondBoders</Text>
      <Text style={styles.subtitle}>Speak Freely, Understand Instantly.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: hp('100%'), 
    width: wp('100%'), 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  logo: {
    marginBottom:'10%',
    width: 250,
    height: 250,
  },
  title: {
    color: '#800080',
    fontSize: 50,
    fontWeight: 'bold',
    marginTop:'-10%',
  },
  subtitle: {
    color: '#800080',
    fontSize: 20,
    marginLeft: '7%',
    marginBottom:'15%',
  },
});

export default SplashScreen;
