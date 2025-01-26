import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Alert } from "react-native";
import * as Clipboard from "expo-clipboard";
// import { Share } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { MaterialIcons } from "@expo/vector-icons";

const MeetingCodeScreen = ({ navigation }) => {

  const [meetingCode] = useState("MDIF-3094I-9023K");

  const handleCopyToClipboard = () => {
    Clipboard.setString(meetingCode);
    Alert.alert("Copied to Clipboard!", "Meeting code has been copied.");
  };

  const handleShareQRCode = () => {
    Alert.alert("Share QR Code", "QR code shared successfully! (Simulated)");
    // Implement actual sharing functionality if needed.
  };

  const handleProceed = () => {
    // Alert.alert("Proceeding", "You are joining the meeting!");
    navigation.navigate("ChatScreen")
    // Add navigation or meeting joining logic here.
  };

  return (
     <View style={styles.container}>
      {/* Profile or Meeting Icon */}
      <View style={styles.header}>
        <Image
          source={require('../assets/icon.png')} // Replace with your image URL or asset
          style={styles.icon}
        />
      </View>

      <View style={styles.sectionContainer}>

      {/* Meeting Code Section */}
      <View style={styles.meetingCodeContainer}>
        <Text style={styles.label}>Meeting code</Text>
        <View style={styles.inputContainer}>
          <TextInput
            value={meetingCode}
            editable={false}
            style={styles.input}
          />
          <TouchableOpacity onPress={handleCopyToClipboard}>
            <MaterialIcons name='content-copy' size={24} style={styles.copyIcon}/>
          </TouchableOpacity>
        </View>
      </View>

      {/* QR Code Section */}
        <Text style={styles.qrLabel}>Scan QR code to enter meeting</Text>
      <View style={styles.qrView}>  
      <QRCode
        value={meetingCode}
        size={200}
        backgroundColor="white"
        color="black"
          />
      </View>    

      {/* Proceed Button */}
        <TouchableOpacity style={styles.proceedButton} onPress={handleProceed}>
          <View style={styles.proceedView}>
            <Text style={styles.proceedButtonText}>Proceed</Text>
          </View>  
        </TouchableOpacity>
        
        <Text style={styles.underLined}></Text>

      {/* Share QR Code */}
       
          <View style={styles.linkView}>
            <Text style={styles.shareLink}>{' '}
                     <Text style={styles.link} onPress={handleShareQRCode}>
                       Click here
                     </Text>{' '} to share QR code.</Text>
          </View>
    </View>
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Dark background
    padding: '2%',
  },
  header: {
    // margin: 20,
    alignItems:'center',
  },
  icon: {
    width: 150,
    height: 150,
    borderRadius: 50,
  },
  sectionContainer: {
    borderWidth: 2, // Adjust thickness as needed
    borderColor: "#00564D", // Border color
    borderRadius: 10, // Rounded corners (optional)
    padding: '5%', // Add padding inside the border
    marginHorizontal: '5%', // Spacing around the section
    backgroundColor: "#111", // Background color inside the bordered section
    // marginTop:'5%',
  },
  meetingCodeContainer: {
    // marginBottom: 20,
    // backgroundColor:'white',
  },
  label: {
    fontSize: 18,
    color: "#fff",
    marginBottom: '3%',
    alignItems:'center',
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#111",
    borderRadius: 10,
    paddingHorizontal: '2.5%',
    paddingVertical: '2%',
    borderColor: "#00564D", // Light border
    borderWidth: 1,
  },
  input: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
  },
  copyIcon: {
    color: "#00564D",
    marginLeft: '2%',
  },
  qrLabel: {
    fontSize: 16,
    color: "#fff",
    marginVertical: '5%',
    textAlign: "center",
  },
  qrView: {
    alignItems:'center',
  },
  proceedButton: {
    backgroundColor: "#00564D",
    paddingVertical: '5%',
    // paddingHorizontal: 50,
    borderRadius: 10,
    marginVertical: '5%',
  },
  proceedView: {
    alignItems:'center',
  },
  proceedButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  underLined: {
    borderBottomWidth: 1,
    borderColor: "#00564D",
    marginBottom:'6%',
  },
  linkView: {
    alignItems: 'center',
    
  },
  link: {
    color:"#00564D",
    fontSize: 16,
  },
  shareLink: {
    color: "#FFF",
    fontSize: 16,
  },
});

export default MeetingCodeScreen;

