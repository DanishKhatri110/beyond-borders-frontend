// screens/LoginScreen.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Image source={require('../assets/splash.png')} style={styles.logo} /> */}
      <Text style={styles.title}>Welcome Back!</Text>
      <TextInput
        style={styles.input}
        placeholder="email@domain.com"
        placeholderTextColor="#A4A4A4"
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        placeholderTextColor="#A4A4A4"
        secureTextEntry
      />
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.selectButton}
        onPress={() => navigation.navigate('MeetingOptions')}
      >
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don’t have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signupLink}>Sign up</Text>
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
  logo: {
    width: 150,
    height: 150,
  },
  title: {
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
  forgotPassword: {
    color: '#00564D',
    marginVertical: 10,
  },
  signupContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  signupText: {
    color: '#A4A4A4',
  },
  signupLink: {
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

export default LoginScreen;
