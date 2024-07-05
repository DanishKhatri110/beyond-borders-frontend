// screens/SignupScreen.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

const SignupDetails = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/splash.png')} style={styles.image} />
      <Text style={styles.title}>Create an account</Text>
      <TextInput
        style={styles.input}
        placeholder="username"
        placeholderTextColor="#A4A4A4"
      />
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        placeholderTextColor="#A4A4A4"
      />
      <TextInput
        style={styles.input}
        placeholder="Create Password"
        placeholderTextColor="#A4A4A4"
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#A4A4A4"
      />
      <TouchableOpacity
        style={styles.selectButton}
        onPress={() => navigation.navigate('LanguageSelect')}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.loginContainer}>
        <Text style={styles.alreadyAccount}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginLink}>Log in</Text>
        </TouchableOpacity>
      </View>
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
  image: {
    width: 150,
    height: 150,
  },
  subtitle: {
    color: '#fff',
    fontSize: 18,
    marginTop: 10,
  },
  title: {
    color: '#800080',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  createAccount: {
    color: '#fff',
    fontSize: 24,
    marginVertical: 20,
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  orContinue: {
    color: '#fff',
    marginVertical: 10,
  },
  googleButton: {
    width: '80%',
    height: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  googleButtonText: {
    color: '#000',
    fontSize: 16,
  },
  terms: {
    color: '#aaa',
    fontSize: 12,
    textAlign: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  link: {
    color: '#0f0',
  },
  loginContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  alreadyAccount: {
    color: '#A4A4A4',
  },
  loginLink: {
    color: '#00564D',
    marginLeft: 5,
  },
  selectButton: {
    width: '80%',
    height: 40,
    backgroundColor: '#00564D',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SignupDetails;
