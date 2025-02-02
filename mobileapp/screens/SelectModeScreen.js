import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Modal, TextInput } from 'react-native';
import { Ionicons } from "@expo/vector-icons"; 
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const SelectModeScreen = ({ navigation }) => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleOneOnOneMeeting = () => {
    navigation.navigate("MeetingCode"); // Replace with your actual screen name
  };

  const handleMultiplePeopleMeeting = () => {
    setIsModalVisible(true); // Show the modal
  };

  const handleOkay = () => {
    setIsModalVisible(false);
    // Optionally, use inputValue here to handle logic for the number of people
    console.log("Number of people:", inputValue);
    setInputValue(""); // Clear input field
    navigation.navigate("MeetingCode")
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/icon.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Select Mode</Text>
      {/* <TouchableOpacity
        style={styles.modeButton}
        onPress={() => navigation.navigate('MeetingCode')}
      >
        <Text style={styles.buttonText}>One-on-one meeting</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.modeButton}
        onPress={() => navigation.navigate('MeetingCode')}
      >
        <Text style={styles.buttonText}>Multiple-people meeting</Text>
      </TouchableOpacity> */}
        <View style={styles.optionsContainer}>
          
          <View style={styles.card}>
            <Ionicons
              name="person-circle-outline"
              size={wp("30%")}
              color="#800080"
            />
            <Text style={styles.cardText}>One-on-one meeting</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={handleOneOnOneMeeting}
            >
              <Text style={styles.buttonText}>Select</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Ionicons
            name="people-circle-outline"
            size={wp("30%")}
            color="#800080"
          />
          <Text style={styles.cardText}>Multiple-people meeting</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={handleMultiplePeopleMeeting}
          >
            <Text style={styles.buttonText}>Select</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              Enter the number of people you intend to have in the meeting:
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Number of people"
              placeholderTextColor="#aaa"
              keyboardType="numeric"
              value={inputValue}
              onChangeText={setInputValue}
            />
            <TouchableOpacity style={styles.modalButton} onPress={handleOkay}>
              <Text style={styles.modalButtonText}>Okay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
      
  );
};

export default SelectModeScreen;

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: "#000", // Black background
    alignItems: "center",
    justifyContent: "center",
    padding: '5%',
  },
  logo: {
    width: wp("45%"),
    height: wp("45%"),
    resizeMode: "contain",
  },
  title: {
    fontSize: wp("6%"),
    fontWeight: "bold",
    color: "#fff",
    // backgroundColor:'white',
  },
  optionsContainer: {
    flex:1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent:'center',
    width: "100%",
    height: '70%',
  },
  card: {
    flex:1,
    width: "45%",
    backgroundColor: "#121212",
    borderRadius: 10,
    alignItems: "center",
    padding: '5%',
    borderColor: "#00564D", // Optional border for better visibility
    borderWidth: 2,
  },
  cardText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    marginVertical: '40%',
  },
  button: {
    backgroundColor: "#00564D",
    borderRadius: 5,
    paddingVertical: '6%',
    paddingHorizontal: '15%',
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: wp("4%"),
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#121212",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    borderWidth: 2,
    borderColor:'#00564D',
  },
  modalTitle: {
    color: "#fff",
    fontSize: wp("4.5%"),
    marginBottom: "4%",
    textAlign: "center",
  },
  input: {
    backgroundColor: "#000",
    color: "#fff",
    borderWidth: 1,
    borderColor: "#00564D",
    borderRadius: 5,
    width: "100%",
    padding: "3%",
    marginBottom: "4%",
  },
  modalButton: {
    backgroundColor: "#00564D",
    borderRadius: 5,
    paddingVertical: "3%",
    paddingHorizontal: "5%",
  },
  modalButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: wp("4%"),
  },
});

