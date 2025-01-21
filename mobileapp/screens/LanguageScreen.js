// screens/SignupScreen.js
import React,{ useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const LanguageScreen = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  return (
    <View style={styles.container}>
    <Image source={require('../assets/group.png')} style={styles.image} />
    <Text style={styles.languageText}>Select Language</Text>
       <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
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
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.buttonText}>Select</Text>
      </TouchableOpacity>
    {/* <Button title="Select" onPress={() => navigation.navigate('SignupDetails')} /> */}
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
    height: 50,
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

export default LanguageScreen;
