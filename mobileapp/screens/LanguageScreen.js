// screens/SignupScreen.js
import React,{ useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const LanguageScreen = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  return (
    <View style={styles.container}>
    <Image source={require('../assets/splash.png')} style={styles.image} />
    <Text style={styles.title}>Select Language</Text>
    <View style={styles.pickerContainer}>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="English" value="en" />
        <Picker.Item label="Spanish" value="es" />
        <Picker.Item label="French" value="fr" />
        <Picker.Item label="German" value="de" />
        <Picker.Item label="Chinese" value="zh" />
        {/* Add more languages as needed */}
      </Picker>
    </View>
    <TouchableOpacity
        style={styles.selectButton}
        onPress={() => navigation.navigate('SignupDetails')}
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
    width: 150,
    height: 150,
  },
  title: {
    color: '#000',
    fontSize: 24,
    marginVertical: 20,
  },
  pickerContainer: {
    width: '80%',
    height: 50,
    backgroundColor: '#000',
    borderRadius: 5,
    marginVertical: 10,
    justifyContent: 'center',
  },
  picker: {
    color: '#fff',
    backgroundColor:'#000'
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

export default LanguageScreen;
