import React, {useState} from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image,KeyboardAvoidingView,ScrollView,Platform,} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const MeetingOptionsScreen = ({ navigation }) => {
  const [meetingCode, setMeetingCode] = useState("");

  const handleCreateMeeting = () => {
    // Add functionality for creating a new meeting
    console.log("Create a new meeting");
  };

  const handleEnterMeeting = () => {
    // Add functionality for entering a meeting with the code
    console.log("Enter meeting with code:", meetingCode);
  };

  const handleCopyCode = () => {
    // Add functionality to copy the code (can use Clipboard API)
    console.log("Copy code:", meetingCode);
  };
  return (
     <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        // keyboardShouldPersistTaps="handled"
      >
      <Image
        source={require('../assets/icon.png')}
        style={styles.logo}
        />

      {/* Title */}
      <Text style={styles.title}>Choose an option</Text>

      {/* Create Meeting Section */}
      <View style={styles.card}>
        <Image
        source={require('../assets/groupmeet.png')}
        style={styles.Meetlogo}
      />
        <Text style={styles.cardTitle}>Create a new Meeting</Text>
        <TouchableOpacity style={styles.button}   onPress={() => navigation.navigate('SelectMode')}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>
        </View>
        {/* onPress={handleCreateMeeting} */}

      {/* Enter Meeting Code Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Enter a Meeting Code:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Meeting Code"
            placeholderTextColor="#A4A4A4"
            value={meetingCode}
            onChangeText={setMeetingCode}
          />
          <TouchableOpacity onPress={handleCopyCode}>
            <MaterialIcons name="content-copy" size={24} color="#00564D" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleEnterMeeting}>
          <Text style={styles.buttonText}>Enter</Text>
        </TouchableOpacity>
      </View>
        </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: "#000",
    
  },
  scrollContent: {
    flex:1,
    alignItems: "center",
    paddingHorizontal: '5%',
    paddingVertical: '2%',
    paddingTop:'2.5%',
  },
  logo: {
    width: 150,
    height: 120,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: '2%',
  },
  card: {
    width: "100%",
    backgroundColor: "#333",
    borderRadius: 10,
    padding: '5%',
    alignItems: "center",
    marginBottom: '5%',
    borderWidth: 2,
    borderColor:'#00564D',
  },
  Meetlogo: {
    width: 160,
    height:150,
  },
  cardTitle: {
    fontSize: 18,
    color: "#fff",
    marginVertical: '3%',
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#222",
    borderRadius: 5,
    paddingHorizontal: '2%',
    marginVertical: '2%',
    width: "100%",
    borderWidth: 2,
    borderColor:'white',
  },
  input: {
    flex: 1,
    // height: 40,
    color: "#fff",
    //  backgroundColor: "#333", // Add this line
    paddingVertical: '2%',    // Optional: Add padding for better usability
  },
  button: {
    backgroundColor: "#00564D",
    borderRadius: 5,
    paddingVertical: '3%',
    paddingHorizontal: '6%',
    marginTop: '3%',
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default MeetingOptionsScreen;
