import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const MeetingOptionsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose an option</Text>
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => navigation.navigate('SelectMode')}
      >
        <Text style={styles.buttonText}>Create a new Meeting</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Enter a Meeting Code"
        placeholderTextColor="#A4A4A4"
      />
      <TouchableOpacity style={styles.enterButton}>
        <Text style={styles.buttonText}>Enter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' },
  title: { color: '#fff', fontSize: 24, marginBottom: 20 },
  optionButton: { backgroundColor: '#00564D', padding: 15, borderRadius: 5, marginVertical: 10 },
  enterButton: { backgroundColor: '#00564D', padding: 15, borderRadius: 5, marginTop: 10 },
  buttonText: { color: '#fff', fontSize: 16 },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});

export default MeetingOptionsScreen;
