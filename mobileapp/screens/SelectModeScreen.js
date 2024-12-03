import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SelectModeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Mode</Text>
      <TouchableOpacity
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
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' },
  title: { color: '#fff', fontSize: 24, marginBottom: 20 },
  modeButton: { backgroundColor: '#00564D', padding: 15, borderRadius: 5, marginVertical: 10 },
  buttonText: { color: '#fff', fontSize: 16 },
});

export default SelectModeScreen;
