import React, { useState, useRef } from 'react';
import { View,Image, Text, TextInput, TouchableOpacity, Modal, StyleSheet, FlatList, Alert, KeyboardAvoidingView, Platform} from 'react-native';
import * as Clipboard from "expo-clipboard";
import QRCode from "react-native-qrcode-svg";
import { FontAwesome, MaterialIcons, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
// import { ScrollView } from 'react-native-web';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const ChatScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([
    { id: "1", text: "This is the main chat template", isUser: false },
    { id: "2", text: "Oh?", isUser: true },
    { id: "3", text: "Cool", isUser: true },
    { id: "4", text: "How does it work?", isUser: true },
    {
      id: "5",
      text: "You just edit any text to type in the conversation you want to show, and delete any bubbles you don’t want to use.",
      isUser: false,
    },
    { id: "6", text: "Boom!", isUser: false },
    { id: "7", text: "Hmm, I think I get it", isUser: true },
    {
      id: "8",
      text: "Will head to the Help Center if I have more questions tho",
      isUser: true,
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAddModalVisible, setAddModalVisible] = useState(false);
  const [isQrModalVisible, setQrModalVisible] = useState(false);
  const [isEndModalVisible, setEndModalVisible] = useState(false);
  const [addPeople, setAddPeople] = useState("");
  const flatListRef = useRef(null);
  // <FlatList>

  const sendMessage = () => {
    if (newMessage.trim().length > 0) {
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), text: newMessage, isUser: true },
      ]);

      // setNewMessage("");
      setNewMessage("");

      // Scroll to the last message
       setTimeout(() => flatListRef.current?.scrollToEnd({ animated: true }), 100);
    }
  };
  const [meetingCode] = useState("MDIF-3094I-9023K");
  
  const handleCopyToClipboard = () => {
    Clipboard.setString(meetingCode);
    Alert.alert("Copied to Clipboard!", "Meeting code has been copied.");
  };
  const handleShareQRCode = () => {
    Alert.alert("Share QR Code", "QR code shared successfully! (Simulated)");
    // Implement actual sharing functionality if needed.
  };


  const renderMessage = ({ item }) => (
   
    <View
      style={[
        styles.messageBubble,
        item.isUser ? styles.userMessage : styles.systemMessage,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  // const  = () => {
  //   setShowModal(null);
  //   // Add logic to enhandleEndMeetingd the meeting
  // };
    const [isMuted, setIsMuted] = useState(false); // State to track mute/unmute

    const toggleMute = () => {
      setIsMuted(!isMuted); // Toggle mute/unmute state
    };

  return (
    
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* Top Menu Bar */}
      <View style={styles.menuBar}>
        <Text style={styles.title}>Chat</Text>
        <TouchableOpacity onPress={toggleMute} style={{marginLeft:'70%'}}>
          <Ionicons 
            name={isMuted ? "volume-mute" : "volume-high"} // Dynamic icon based on state
            size={24} 
            color="#fff" 
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          setIsModalVisible(true)
        }}
        >
          <Ionicons name="ellipsis-vertical" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Chat Messages */}
     
      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chatContainer}
        // keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled" 
        automaticallyAdjustKeyboardInsets
          />   

      {/* Input Area */}
     
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Message..."
          placeholderTextColor="#aaa"
          value={newMessage}
          onChangeText={setNewMessage}
          
          />
        <TouchableOpacity onPress={()=>navigation.navigate("VoiceModeScreen1")} style={styles.sendButton}>
          <FontAwesome name="microphone" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Ionicons name="send" size={24} color="#fff" />
          </TouchableOpacity>
        </View>  

      {/* Modal */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        >
          <View style={styles.modalMenuContainer}>
            <View style={styles.modalContent}>
              <TouchableOpacity
                onPress={() => {
                  console.log("Add People Clicked");
                  setIsModalVisible(false);
                  setAddModalVisible(true);
                }}
                style={[styles.modalOption, { borderBottomWidth: 2, borderBottomColor: '#00564D', padding: '1%' }]}
              >
           
                <Text style={styles.modalText}>Add People</Text>
                <Ionicons name="person-add" size={24} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  console.log("Scan QR Code Clicked");
                  setIsModalVisible(false);
                  setQrModalVisible(true);
                }}
                style={[styles.modalOption, { borderBottomWidth: 2, borderBottomColor: '#00564D', padding: '1%' }]}
              >
                <Text style={styles.modalText}>Scan QR Code</Text>
                <MaterialCommunityIcons name="qrcode-scan" size={24} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  console.log("End Meeting Clicked");
                  setIsModalVisible(false);
                  setEndModalVisible(true);
                }}
                style={[styles.modalOption, { borderBottomWidth: 2, borderBottomColor: '#00564D', padding: '1%' }]}
              >
                <Text style={styles.modalText}>End Meeting</Text>
                <Ionicons name="close-circle" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                  console.log("End Meeting Clicked");
                  setIsModalVisible(false);
                  // setEndModalVisible(true);
                }}
                style={styles.modalOption}
              >
                <Text style={styles.modalText}>Close Bar</Text>
                <Ionicons name="close" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
     {/* Add People Modal */}
      <Modal
        visible={isAddModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setAddModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>
            Increase Number of People Allowed in the Meeting:
          </Text>
          <TextInput
            style={styles.modalInput}
            placeholder="Add People"
            placeholderTextColor="#aaa"
            value={addPeople}
            onChangeText={setAddPeople}
          />
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => {
              Alert.alert("Added", `${addPeople} added to the meeting.`);
              setAddPeople("");
              setAddModalVisible(false);
            }}
          >
            <Text style={styles.modalButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* QR Code Modal */}
      <Modal
        visible={isQrModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setQrModalVisible(false)}
      >
        <View style={styles.modalQrContainer}>
        <View style={styles.meetingCodeContainer}>
          <Text style={styles.label}>Meeting code</Text>
          <View style={styles.inputQrContainer}>
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
        <Text style={styles.underLined}></Text>
    
          {/* Share QR Code */}
            
          <View style={styles.linkView}>
            <Text style={styles.shareLink}>{' '}
              <Text style={styles.link} onPress={handleShareQRCode}>
                Click here
              </Text>{' '} to share QR code.</Text>
          </View>
          <View style={styles.qrCodePlaceholder} />
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => setQrModalVisible(false)}
          >
            <Text style={styles.modalButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* End Meeting Modal */}
      <Modal
        visible={isEndModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setEndModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Are you sure you want to End meeting?</Text>
          <View style={styles.modalActions}>
            <TouchableOpacity
              style={[styles.modalButton, styles.modalDangerButton]}
              onPress={() => {
                Alert.alert("Meeting Ended");
                setEndModalVisible(false);
              }}
            >
              <Text style={styles.modalButtonText}>End</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setEndModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
        </Modal>
       
      </KeyboardAvoidingView>
      
      
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  menuBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: '5',
    paddingVertical: '3%',
    backgroundColor: "#06696b",
    flexGrow:0,
  },
  
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  chatContainer: {
    paddingHorizontal: '3%',
    paddingBottom: '2%',
  },
  messageBubble: {
    maxWidth: "80%",
    padding: '3%',
    borderRadius: 20,
    marginVertical: '1%',
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#7d3feb",
  },
  systemMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#06696b",
  },
  messageText: {
    color: "#fff",
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: '1%',
    marginHorizontal: '3%',
    marginBottom:'1%',
    backgroundColor: "#111",
    borderWidth: 2,
    borderRadius:10,
    borderColor:"#444",
  },
  textInput: {
    flex: 1,
    // height: 40,
    backgroundColor: "#444",
    borderRadius: 20,
    paddingHorizontal: '5%',
    color: "#fff",
  },
  sendButton: {
    marginLeft: '2%',
    backgroundColor: "#7d3feb",
    borderRadius: 20,
    padding: '3%',
  },
  modalMenuContainer: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  modalContent: {
    backgroundColor: "#000",
    marginLeft: '50%',
    marginTop:'11%',
    borderRadius: 10,
    width: "50%",
    borderWidth: 2,
    borderColor:'#00564D',
    paddingHorizontal: '2%',
    // padding: 20,
    // alignItems: "center",
  },
    modalOption: {
    flexDirection: "row",
    justifyContent:'space-between',
    alignItems: "center",
    marginVertical: '3%',

  },
  modalText: {
    marginLeft: '3%',
    fontSize: 16,
    color: "#fff",
  },
   modalContainer: {
     // flex: 1,
     borderWidth: 2, // Adjust thickness as needed
    borderColor: "#00564D", // Border color
    borderRadius: 10, // Rounded corners (optional)
    justifyContent: "center",
     alignItems: "center",
    marginHorizontal:'1%',
    backgroundColor: "rgba(0, 0, 0, 0.8)",
     padding: '10%',
    marginTop:'12%',
  },
  modalTitle: {
    fontSize: 18,
    color: "#fff",
    marginBottom: '10%',
    textAlign: "center",
  },
  modalInput: {
    width: "80%",
    // height: 50,
    backgroundColor: "#111",
    borderRadius: 10,
    paddingHorizontal: '5%',
    color: "#fff",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#00564D",
  },
  modalButton: {
    backgroundColor: "#00564D",
    borderRadius: 10,
    paddingVertical: '3%',
    paddingHorizontal: '12%',
    marginTop: '3%',
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalDangerButton: {
    backgroundColor: "#8B0000",
    marginRight: '3%',
  },
  modalActions: {
    flexDirection: "row",
    marginTop: '10%',
  },
  modalQrContainer: {
    borderWidth: 2, // Adjust thickness as needed
    borderColor: "#00564D", // Border color
    borderRadius: 10, // Rounded corners (optional)
    padding: '5%', // Add padding inside the border
    marginHorizontal: '1%', // Spacing around the section
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Background color inside the bordered section
    marginTop:'12%',
  },
  label: {
    fontSize: 18,
    color: "#fff",
    marginBottom: '3%',
    alignItems:'center',
  },
  inputQrContainer: {
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

  }
);

