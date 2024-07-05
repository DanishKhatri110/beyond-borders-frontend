// screens/SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000); // 3 seconds delay
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/splash.png')} style={styles.logo} />
      <Text style={styles.title}>BeYondBoders</Text>
      <Text style={styles.subtitle}>Speak Freely, Understand Instantly.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    color: '#800080',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  subtitle: {
    color: '#fff',
    fontSize: 18,
    marginTop: 10,
  },
});

export default SplashScreen;
