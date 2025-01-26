import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const VoiceModeScreen = ({ navigation }) => {
  const handleToggleToChat = () => {
    navigation.goBack(); // Return to the previous chat screen
  };

  return (
    <View style={styles.container}>
      {/* Speaker Section */}
        <View style={styles.speakerContainer}>
          <TouchableOpacity style={styles.speakerIcon}>
          <Text style={styles.iconText}></Text> {/* Replace with speaker icon*/}
          </TouchableOpacity>
          <View style={styles.voiceMessages}>
            <Text style={styles.voiceText}>Hmm...</Text>
            <Text style={styles.voiceText}>
              I think I get it... Will head to the Help Center if I have more
              questions.
            </Text>
          </View>
        </View>

        {/* Microphone Section */}
        <View style={styles.microphoneContainer}>
          <TouchableOpacity style={styles.microphoneIcon}>
            <Text style={styles.iconText}></Text> {/* Replace with mic icon */}
          </TouchableOpacity>
          <Text style={styles.recordText}>Tap to record...</Text>
        </View>

        {/* Toggle Back to Chat */}
        <TouchableOpacity style={styles.backButton} onPress={handleToggleToChat}>
          <Text style={styles.backButtonText}>Back to Chat</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20 },
  speakerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  speakerIcon: {
    backgroundColor: '#00564D',
    padding: 20,
    borderRadius: 50,
    marginBottom: 20,
  },
  iconText: { fontSize: 40, color: '#fff' },
  voiceMessages: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 8,
    alignSelf: 'stretch',
  },
  voiceText: { color: '#fff', fontSize: 16, marginVertical: 5 },
  microphoneContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  microphoneIcon: {
    backgroundColor: '#00564D',
    padding: 30,
    borderRadius: 50,
  },
  recordText: { color: '#A4A4A4', fontSize: 14, marginTop: 10 },
  backButton: {
    alignSelf: 'center',
    marginTop: 30,
    padding: 10,
    backgroundColor: '#00564D',
    borderRadius: 5,
  },
  backButtonText: { color: '#fff', fontSize: 16 },
});

export default VoiceModeScreen;
