// screens/HomeScreen.js
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const HomeScreen = ({ navigation }) => {
   const handleTermsPress = () => {
    Linking.openURL('https://en.wikipedia.org/wiki/Service_provider#:~:text=A%20service%20provider%20(SP)%20is,third%2Dparty%20or%20outsourced%20supplier.');
  };

  const handlePrivacyPress = () => {
    Linking.openURL('https://www.privacypolicygenerator.info/');
  };

  const handleLoginPress = () => {
    console.log("Navigating to Login..."); // Replace with your navigation code
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.imageText}>Speak Freely, Understand Instantly.</Text>
      <View style={styles.imageView}> 
        <Image source={require('../assets/persons.png')} style={styles.image} />
      </View>  
      <Text style={styles.title}>BeyondBorders</Text>
      <Text style={styles.subtitle}>Create an account</Text>
      <Text style={styles.label}>Enter your email to sign up for this app</Text>
      <TextInput
        style={styles.input}
        placeholder="email@domain.com"
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign up with email</Text>
      </TouchableOpacity>

      <Text style={styles.divider}>or continue with</Text>

      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleButtonText}>G Google</Text>
      </TouchableOpacity>

      <Text style={styles.terms}>
        By clicking continue, you agree to our{' '}
        <Text style={styles.link} onPress={handleTermsPress}>
          Terms of Service
        </Text>{' '}
        and{' '}
        <Text style={styles.link} onPress={handlePrivacyPress}>
          Privacy Policy
        </Text>.
      </Text>
    
      <Text style={styles.login}>Already have an account?{' '}
        {/* <TouchableOpacity onPress={handleLoginPress}> */}
        <Text style={styles.link} onPress={handleLoginPress}>
          Login
        </Text>
        {/* </TouchableOpacity>   */}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    height: hp('100%'), 
    width: wp('100%'), 
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  imageText: {
    fontSize: 15,
    color: '#fff',
    marginBottom: 20,
  },  
  imageView: {
    marginTop: '-5%',
    marginBottom:'-5%',
  },
  image: {
    width: 200,
    height:200,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 20,
  },
  label: {
    color: '#fff',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    width: '100%',
  },
  button: {
    backgroundColor: '#00564D',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  divider: {
    color: '#fff',
    marginBottom: 15,
  },
  googleButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  terms: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: '4%',
  },
  link: {
    color: '#00564D',
    // fontSize:15,
    // textDecorationLine: 'underline',
  },
  login: {
    color: '#fff',
    // fontSize:15,
    // textDecorationLine: 'underline',
  },
});

export default HomeScreen;
