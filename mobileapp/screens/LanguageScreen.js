// screens/SignupScreen.js
import React,{ useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const LanguageScreen = ({ route , navigation }) => {

  const { email, username, mobileNumber } = route.params;

  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguageChange = (itemValue) => {
    // Capitalize the first letter of the selected language
    const capitalizedLanguage = itemValue.charAt(0).toUpperCase() + itemValue.slice(1);
    setSelectedLanguage(capitalizedLanguage);
  };

  const handleSelectLanguage = () => {
    navigation.navigate('Profile', {
      email,
      username,
      mobileNumber,
      language: selectedLanguage,
    });
  };

  return (
    <View style={styles.container}>
    <Image source={require('../assets/group.png')} style={styles.image} />
    <Text style={styles.languageText}>Select Language</Text>
       <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={handleLanguageChange}
          style={styles.picker}
          dropdownIconColor="#fff"
          mode='dialog'
        >
          <Picker.Item label="Preferred Language" value="" />
          <Picker.Item label="English" value="english" />
          <Picker.Item label="German" value="german" />
          <Picker.Item label="Spanish" value="spanish" />
          <Picker.Item label="Mandarin" value="mandarin" />
        </Picker>
      </View>
    <TouchableOpacity
        style={styles.selectButton}
        onPress={handleSelectLanguage}
        disabled={!selectedLanguage}
      >
        <Text style={styles.buttonText}>Select</Text>
      </TouchableOpacity>
  </View>
  );
};

export default LanguageScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: hp('100%'), 
    width: wp('100%'), 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  image: {
    width: 350,
    height: 200,
  },
  languageText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    // marginBottom: '5%',
  },
  dropdownContainer: {
    backgroundColor: "#222", // Dark background for dropdown
    borderRadius: 5,
    width: "80%",
    height: 50,
    justifyContent: "center",
    paddingHorizontal: '3%',
    marginTop: '5%',
    // borderWidth: 1,
    // borderColor:'#fff'

  },
  picker: {
    color: "#fff",// White text in dropdown
  },
  labelText: {
    // color: "#fff",
    // backgroundColor: "#222",
  },
  selectButton: {
    width: '80%',
    height: '7%',
    backgroundColor: '#00564D',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: '3%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});

