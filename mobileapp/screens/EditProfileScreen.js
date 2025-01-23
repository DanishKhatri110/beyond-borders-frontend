import React, { useState } from "react";
import {View,Text,TextInput,StyleSheet,TouchableOpacity,Image,Platform,} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { MaterialIcons } from "@expo/vector-icons";

const EditProfileScreen = () => {
  
  const [username, setUsername] = useState("Halley Cameron");
  const [mobileNumber, setMobileNumber] = useState("03213390729");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [language, setLanguage] = useState("English");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const handleSave = () => {
    console.log("Profile updated");
    console.log({ username, password, confirmPassword, language });
    // Save profile logic goes here
  };

  return (

    <View style={styles.container}>
      {/* Profile Image */}
      <View style={styles.imageView}>
        <TouchableOpacity style={styles.imageFrame} onPress={() => console.log('profileImage')}>
              <Image source={require('../assets/person.jpg')} style={styles.image} />
        </TouchableOpacity>                
      </View>

      {/* Username Input */}
      <Text style={styles.label}>Username</Text>
      <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#A4A4A4"
        value={username}
        onChangeText={setUsername}
        />
      </View>
      <Text style={styles.label}>Username</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          placeholderTextColor="#A4A4A4"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          keyboardType="phone-pad"
        />
      </View>

      {/* Password Input */}
      <Text style={styles.label}>Password</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#A4A4A4"
          secureTextEntry={!isPasswordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <MaterialIcons
            name={isPasswordVisible ? "visibility" : "visibility-off"}
            size={24}
            color="#A4A4A4"
          />
        </TouchableOpacity>
      </View>

      {/* Confirm Password Input */}
      <Text style={styles.label}>Confirm Password</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#A4A4A4"
          secureTextEntry={!isConfirmPasswordVisible}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
          <MaterialIcons
            name={isConfirmPasswordVisible ? "visibility" : "visibility-off"}
            size={24}
            color="#A4A4A4"
          />
        </TouchableOpacity>
      </View>

      {/* Language Picker */}
      <Text style={styles.label}>Language Selected</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={language}
          onValueChange={(itemValue) => setLanguage(itemValue)}
          style={styles.picker}
          dropdownIconColor="#fff"
          mode='dropdown'
        >
          <Picker.Item label="English" value="English" />
          <Picker.Item label="Spanish" value="Spanish" />
          <Picker.Item label="French" value="French" />
        </Picker>
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  )
}

export default EditProfileScreen

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: '5%',
  },
  // profileImage: {
  //   width: 150,
  //   height: 150,
  //   borderRadius: 100,
  //   alignSelf: "center",
  //   marginBottom: '5%',
  // },
   imageView: {
     alignItems: "center",
     marginBottom: '5%',
  },
  imageFrame: {
    width: 150,
    height: 150,
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#222",
    // marginTop: '-20%',
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  label: {
    fontSize: 16,
    color: "#fff",
    marginBottom: '2%',
    marginLeft: '2%',
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#A4A4A4",
    marginBottom: '5%',
    paddingRight: '2%',
  },
  input: {
    flex: 1,
    color: "#fff",
    padding: '2%',
    fontSize: 16,
  },
  pickerContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#A4A4A4",
    marginBottom: '5%',
  },
  picker: {
    color: "#fff",
    ...Platform.select({
      android: {
        marginLeft: '-2%', // Adjust picker position
      },
    }),
  },
  saveButton: {
    backgroundColor: "#00564D",
    borderRadius: 8,
    padding: '3%',
    alignItems: "center",
    marginTop: '2%',
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
})