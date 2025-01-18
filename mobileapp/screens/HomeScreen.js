// screens/HomeScreen.js
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
     <View style={styles.container}>
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
        By clicking continue, you agree to our Terms of Service and Privacy Policy
      </Text>

      <TouchableOpacity>
        <Text style={styles.login}>Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
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
    backgroundColor: '#0f0',
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
    marginLeft: 10,
  },
  terms: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 15,
  },
  login: {
    color: '#fff',
    textDecorationLine: 'underline',
  },
});

export default HomeScreen;
