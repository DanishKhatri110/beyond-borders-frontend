// screens/LoginScreen.js
import React, {useState} from 'react';
import {View,Text,TextInput,StyleSheet,TouchableOpacity,Image,} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  //  const handleLogin = () => {
  //   console.log("Email:", email);
  //   console.log("Password:", password);
  //   navigation.navigate('MeetingOptions')
  // };
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate("MeetingOptions"); // Navigate after successful login
    } catch (error) {
      setError(error.message); // Display error message
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/group.png")} // Replace with your actual image
        style={styles.logo}
      />
       <Text style={styles.welcomeText}>Welcome Back!</Text>
     <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="email@domain.com"
          placeholderTextColor="#A4A4A4"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

       <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="password"
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

       <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signupLink}> Sign up</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 350,
    height: 200,
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#222",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginVertical: 10,
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#fff",
  },
  input: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
  },
  forgotPassword: {
    color: "#00564D",
    alignSelf: "flex-end",
    marginVertical: 10,
    fontSize: 14,
        marginLeft:'65%',
  },
  errorText: {
    color: "#fff",
    textAlign: "center",
    marginTop: "2%",
  },
  loginButton: {
    backgroundColor: "#00564D",
    borderRadius: 8,
    paddingVertical: 15,
    width: "100%",
    alignItems: "center",
    marginVertical: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  signupContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  signupText: {
    color: "#A4A4A4",
    fontSize: 14,
  },
  signupLink: {
    color: "#00564D",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default LoginScreen;
