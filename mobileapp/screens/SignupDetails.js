// screens/SignupScreen.js
import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

const SignupDetails = ({ route, navigation }) => {
  const { email } = route.params;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const handleSignUp = () => {
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("Mobile Number:", mobileNumber);
    navigation.navigate('LanguageSelect', {
      email,
      username,
      mobileNumber,
    });
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };



  return (
    <View style={styles.container}>
      <Image source={require('../assets/group.png')} style={styles.image} />
      <Text style={styles.title}>Create an account</Text>
       {/* Username Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#A4A4A4"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      {/* Mobile Number Input */}
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
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Create password"
          placeholderTextColor="#A4A4A4"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!isPasswordVisible}
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
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirm password"
          placeholderTextColor="#A4A4A4"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!isConfirmPasswordVisible}
        />
        <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
          <MaterialIcons
            name={isConfirmPasswordVisible ? "visibility" : "visibility-off"}
            size={24}
            color="#A4A4A4"
          />
        </TouchableOpacity>
      </View>

      {/* Create Button */}
      <TouchableOpacity style={styles.createButton} onPress={handleSignUp}>
        <Text style={styles.createButtonText}>Create</Text>
      </TouchableOpacity>

      {/* Login Link */}
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginLink}> Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupDetails;


const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    padding: '5%',
  },
  image: {
    width: 350,
    height: 200,
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: '2%',
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#222",
    borderRadius: 8,
    paddingHorizontal: '3%',
    marginVertical: '3%',
    width: "100%",
    height: "7%",
    borderWidth: 1,
    borderColor: "#fff",
  },
  input: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
  },
  createButton: {
    backgroundColor: "#00564D",
    borderRadius: 8,
    paddingVertical: '3%',
    width: "100%",
    alignItems: "center",
    marginVertical: '5%',
  },
  createButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginContainer: {
    flexDirection: "row",
    marginTop: '2%',
  },
  loginText: {
    color: "#A4A4A4",
    fontSize: 14,
  },
  loginLink: {
    color: "#00564D",
    fontSize: 14,
    fontWeight: "bold",
  },
});

