import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const MeetingCodeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan QR code to enter meeting</Text>
      <View style={styles.qrCode}>
        <Text style={{ color: '#fff' }}>[QR CODE PLACEHOLDER]</Text>
      </View>
      <TouchableOpacity
        style={styles.proceedButton}
        onPress={() => navigation.navigate('VoiceModeScreen')}
      >
        <Text style={styles.buttonText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' },
  title: { color: '#fff', fontSize: 20, marginBottom: 20 },
  qrCode: {
    width: 200,
    height: 200,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  proceedButton: { backgroundColor: '#00564D', padding: 15, borderRadius: 5, marginVertical: 10 },
  buttonText: { color: '#fff', fontSize: 16 },
});

export default MeetingCodeScreen;
