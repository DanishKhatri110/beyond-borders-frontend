import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet, FlatList } from 'react-native';

const ChatScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([
    { id: '1', text: 'This is the main chat template', timestamp: 'Nov 30, 2023, 9:41 AM', user: 'system' },
    { id: '2', text: 'Hmm?', timestamp: '', user: 'me' },
  ]);
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(null);

  const sendMessage = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        { id: Date.now().toString(), text: message, timestamp: new Date().toLocaleString(), user: 'me' },
      ]);
      setMessage('');
    }
  };

  const renderMessage = ({ item }) => (
    <View style={[styles.messageBubble, item.user === 'me' ? styles.myMessage : styles.otherMessage]}>
      <Text style={styles.messageText}>{item.text}</Text>
      {item.timestamp && <Text style={styles.timestamp}>{item.timestamp}</Text>}
    </View>
  );

  const handleEndMeeting = () => {
    setShowModal(null);
    // Add logic to end the meeting
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messageList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Message..."
          placeholderTextColor="#A4A4A4"
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>

      {/* Action Menu Modals */}
      <Modal visible={showModal === 'addPeople'} transparent animationType="slide">
        <View style={styles.modal}>
          <Text style={styles.modalTitle}>Increase Number of People</Text>
          <TouchableOpacity style={styles.modalButton} onPress={() => setShowModal(null)}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal visible={showModal === 'endMeeting'} transparent animationType="slide">
        <View style={styles.modal}>
          <Text style={styles.modalTitle}>Are you sure you want to end the meeting?</Text>
          <View style={styles.modalActions}>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setShowModal(null)}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.endButton} onPress={handleEndMeeting}>
              <Text style={styles.buttonText}>End</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  messageList: { padding: 10 },
  messageBubble: { padding: 10, marginVertical: 5, borderRadius: 8 },
  myMessage: { alignSelf: 'flex-end', backgroundColor: '#00564D' },
  otherMessage: { alignSelf: 'flex-start', backgroundColor: '#333' },
  messageText: { color: '#fff', fontSize: 16 },
  timestamp: { color: '#A4A4A4', fontSize: 12, marginTop: 5 },
  inputContainer: { flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#333' },
  input: { flex: 1, backgroundColor: '#222', color: '#fff', borderRadius: 5, paddingHorizontal: 10 },
  sendButton: { marginLeft: 10, backgroundColor: '#00564D', padding: 10, borderRadius: 5 },
  buttonText: { color: '#fff', fontSize: 16 },
  modal: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.8)' },
  modalTitle: { color: '#fff', fontSize: 18, marginBottom: 20 },
  modalButton: { backgroundColor: '#00564D', padding: 15, borderRadius: 5 },
  modalActions: { flexDirection: 'row', marginTop: 20 },
  cancelButton: { backgroundColor: '#333', padding: 10, borderRadius: 5, marginHorizontal: 5 },
  endButton: { backgroundColor: '#FF0000', padding: 10, borderRadius: 5, marginHorizontal: 5 },
});

export default ChatScreen;
