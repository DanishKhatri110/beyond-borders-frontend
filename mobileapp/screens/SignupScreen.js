// screens/SignupScreen.js
import React, {useState} from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, Linking } from 'react-native';

const SignupScreen = ({ navigation }) => {
  const [signupEmail, setSignupEmail] = useState('');
   const handleTermsOfSevicePress = () => {
     Linking.openURL('https://en.wikipedia.org/wiki/Service_provider#:~:text=A%20service%20provider%20(SP)%20is,third%2Dparty%20or%20outsourced%20supplier.');
   };
 
   const handlePrivacyPolicyPress = () => {
     Linking.openURL('https://www.privacypolicygenerator.info/');
   };
  
  const handleSignupPress = () => {
    navigation.navigate('SignupDetails', { email:signupEmail });
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
         value={signupEmail}
         onChangeText={setSignupEmail}
         placeholderTextColor="#A4A4A4"
         placeholder="email@domain.com"
         keyboardType="email-address"
       />
       <TouchableOpacity
         style={styles.button}
         onPress={handleSignupPress}
       >
         <Text style={styles.buttonText}>Sign up with email</Text>
       </TouchableOpacity>
 
       <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <Text style={styles.divider}>or continue with</Text>
          <View style={styles.line} />
       </View>
 
       <TouchableOpacity style={styles.googleButton}>
         <Image source={require('../assets/google.png')} style={styles.Gicon}/>
         <Text style={styles.googleButtonText}> Google</Text>
       </TouchableOpacity>
 
       <Text style={styles.terms}>
         By clicking continue, you agree to our{' '}
         <Text style={styles.link} onPress={handleTermsOfSevicePress}>
           Terms of Service
         </Text>{' '}
         and{' '}
         <Text style={styles.link} onPress={handlePrivacyPolicyPress}>
           Privacy Policy
         </Text>.
       </Text>
     
       <Text style={styles.login}>Already have an account?{' '}
         <Text style={styles.link} onPress={handleLoginPress}>
           Login
         </Text>
       </Text>
     </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  imageText: {
    fontSize: 15,
    color: '#fff',
    marginBottom: '5%',
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
    color: '#AB00FF',
    marginBottom: '3%',
  },
  subtitle: {
    fontSize: 20,
    color: '#fff',
    marginBottom: '3%',
  },
  label: {
    color: '#fff',
    marginBottom: '3%',
  },
  input: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    marginBottom: '4%',
    width: '100%',
    borderWidth: 2,
    borderColor:'white',
  },
  button: {
    backgroundColor: '#00564D',
    padding: '4%',
    borderRadius: 5,
    marginBottom: '2%',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  dividerContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  marginBottom: '3%',
  },
  line: {
    flex: 1,  // This makes the lines expand to fill available space
    height: 1, // Thickness of the line
    backgroundColor: '#fff', // Color of the line
    marginHorizontal: 10, // Space between line and text
  },
  divider: {
    color: '#fff',
    fontSize: 16,
  },
  googleButton: {
    backgroundColor: '#fff',
    padding: '2.5%',
    borderRadius: 5,
    marginBottom: '3%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: "3%",
  },
  Gicon: {
    width: 30,
    height:30,
  },
  googleButtonText: {
    color: '#000',
    fontSize:15,
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


