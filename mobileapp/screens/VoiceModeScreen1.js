import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Audio } from "expo-av";
import * as Speech from "expo-speech";

const VoiceModeScreen1 = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recording, setRecording] = useState(null);
  // <Audio.Recording | null>
  const [audioUri, setAudioUri] = useState(null);
  // <string | null>
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);
  // <Audio.Sound | null>
  const [message, setMessage] = useState([
    "Hmmm............",
    "I think I get it.......Will head to the Help",
    "Center if I have more questions tho",
  ]);

  // Handle audio recording
  const toggleRecording = async () => {
    if (isRecording) {
      // Stop recording
      try {
        await recording?.stopAndUnloadAsync();
        const uri = recording?.getURI();
        setAudioUri(uri || null);
        setMessage(["Recording stopped", "Tap play to listen"]);
      } catch (error) {
        console.error("Error stopping recording", error);
        Alert.alert("Error", "Unable to stop recording.");
      } finally {
        setIsRecording(false);
        setRecording(null);
      }
    } else {
      // Start recording
      try {
        const { granted } = await Audio.requestPermissionsAsync();
        if (!granted) {
          Alert.alert(
            "Permission Denied",
            "You need to enable microphone access to record audio."
          );
          return;
        }

        const { recording: newRecording } = await Audio.Recording.createAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );
        setRecording(newRecording);
        setMessage(["Recording in progress...", "Speak now"]);
        setIsRecording(true);
      } catch (error) {
        console.error("Error starting recording", error);
        Alert.alert("Error", "Unable to start recording.");
      }
    }
  };

  // Handle audio playback
  const togglePlayback = async () => {
    if (isPlaying) {
      // Stop playback
      try {
        await sound?.stopAsync();
      } catch (error) {
        console.error("Error stopping playback", error);
        Alert.alert("Error", "Unable to stop playback.");
      } finally {
        setIsPlaying(false);
      }
    } else if (audioUri) {
      // Start playback
      try {
        const { sound: newSound } = await Audio.Sound.createAsync({ uri: audioUri });
        setSound(newSound);
        await newSound.playAsync();
        setMessage(["Playing recorded audio...", ""]);
        setIsPlaying(true);

        // Stop playback automatically when finished
        newSound.setOnPlaybackStatusUpdate((status) => {
          if (status.didJustFinish) {
            setIsPlaying(false);
            setMessage(["Playback finished", "Tap play to listen again"]);
          }
        });
      } catch (error) {
        console.error("Error starting playback", error);
        Alert.alert("Error", "Unable to play audio.");
      }
    } else {
      Alert.alert("No Recording", "Please record audio before playback.");
    }
  };

  // Handle text-to-speech
  const speakText = () => {
    const text = message.join(" ");
    Speech.speak(text, {
      pitch: 1.0,
      rate: 1.0,
      onStart: () => setMessage(["Speaking..."]),
      onDone: () => setMessage(["Speech completed"]),
    });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <MaterialIcons name="language" size={30} color="#fff" />
        <Text style={styles.headerText}>Audio to audio mode</Text>
        <Ionicons name="volume-high" size={30} color="#fff" />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Speaker Icon Section */}
        <View style={styles.card}>
          <TouchableOpacity onPress={speakText}>
            <Ionicons name="volume-high" size={80} color="#06696b" />
          </TouchableOpacity>            
          <View style={styles.messageBox}>
            {message.map((line, index) => (
              <Text key={index} style={styles.messageText}>
                {line}
              </Text>
            ))}
          </View>
        </View>

        {/* Text-to-Speech Button
        <TouchableOpacity style={styles.card} onPress={speakText}>
          <MaterialIcons name="record-voice-over" size={80} color="#06696b" />
          <Text style={styles.recordingText}>Speak Message</Text>
        </TouchableOpacity> */}

        {/* Microphone Icon Section */}
        <TouchableOpacity style={styles.card} onPress={toggleRecording}>
          <MaterialIcons
            name="mic"
            size={80}
            color={isRecording ? "red" : "#06696b"}
          />
          <Text style={styles.recordingText}>
            {isRecording ? "Stop Recording" : "Start Recording"}
          </Text>
        </TouchableOpacity>

        {/* Playback Button */}
        {audioUri && (
          <TouchableOpacity style={styles.card} onPress={togglePlayback}>
            <Ionicons
              name={isPlaying ? "stop-circle" : "play-circle"}
              size={80}
              color={isPlaying ? "red" : "#06696b"}
            />
            <Text style={styles.recordingText}>
              {isPlaying ? "Stop Playback" : "Play Recording"}
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#06696b",
  },
  headerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  card: {
    backgroundColor: "#111",
    borderColor: "#06696b",
    borderWidth: 1,
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  messageBox: {
    marginTop: 10,
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 10,
    width: "90%",
  },
  messageText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
    marginVertical: 2,
  },
  recordingText: {
    color: "#fff",
    fontSize: 16,
    marginTop: 10,
  },
});

export default VoiceModeScreen1;
