import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking, Platform } from "react-native";
import {LinearGradient}  from 'expo-linear-gradient';
import { Title, Card } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

const ProfileScreen = ({route , navigation}) => {
  
  const { email, username, mobileNumber, language } = route.params || {};
  const handleEdit = () => {
    navigation.navigate('EditProfile');
  }; 
  
  
  const openDial = () => {
        if (Platform.OS === 'android') {
            Linking.openURL('tel:03213390729');
        } else {
            Linking.openURL('telprompt:03213390729');
        }
    };
  return (
    <View style={styles.container}>
      <LinearGradient
            colors={['#000', '#111', '#222']} style={styles.Lineargradient}
            />

      {/* Image Frame */}
        
      <View style={styles.imageView}>
        <TouchableOpacity style={styles.imageFrame} onPress={() => console.log('profileImage')}>
              <Image source={require('../assets/person.jpg')} style={styles.image} />
        </TouchableOpacity>                
      </View>
      
      <View style={styles.titleView}>
        <Title style={{ fontSize: 30, color: "#fff" }}>{username}</Title>
        <Text style={{ fontSize: 15, color: '#fff' }}>{email}</Text>
      </View>
      
      <Card style={styles.myCard}  onPress={() => openDial()}>
        <View style={styles.cardContent} >
                <FontAwesome name="phone" color="#00564D" size={40}/>        
          <Text style={styles.myText}>{mobileNumber}</Text>
          </View>
      </Card>
      <Card style={styles.myCard}>
        <View style={styles.cardContent} >
          <FontAwesome name="language" color="#00564D" size={40}/>        
          <Text style={styles.myText}>{language || 'Not specified'}</Text>
          </View>
      </Card>

      <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
        <View style={styles.btnView}>
          <Text style={styles.editButtonText}>Edit</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
     container: {
    flex: 1,
    backgroundColor: "#000",
    // alignItems: "center",
    // justifyContent: "center",
    // padding: '5%',
  },
  Lineargradient: {
    height: '20%',
    width:'100%',
  },
  imageView: {
    alignItems: "center",
  },
  imageFrame: {
    width: 180,
    height: 180,
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#222",
    marginTop: '-20%',
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  titleView: {
    alignItems: "center",
    margin:"5%",
  },
  
  myCard: {
    borderWidth: 1,
    borderColor:'#fff',
    backgroundColor:"#222",
    margin: '2%',
    padding:'2%',
  },
  cardContent: {
      flexDirection: 'row',
  },
  myText: {
    color:"#fff",
    fontSize: 20,
    marginTop: '3%',
    marginLeft: '2%',
  },
  btnView: {
    marginHorizontal:'3%',
  },
  editButton: {
    backgroundColor: "#00564D",
    borderRadius: 8,
    paddingVertical: '3%',
    alignItems: "center",
    margin: '5%',
    
  },
  editButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
}
)


// import * as ImagePicker from "expo-image-picker";


// const [modalVisible, setModalVisible] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
// const openCamera = async () => {
//     const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
//     if (!permissionResult.granted) {
//       alert("Camera access is required!");
//       return;
//     }

//     const result = await ImagePicker.launchCameraAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [1, 1],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setSelectedImage(result.assets[0].uri);
//     }
//     setModalVisible(false);
//   };

//   const openGallery = async () => {
//     const permissionResult =
//       await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (!permissionResult.granted) {
//       alert("Gallery access is required!");
//       return;
//     }

//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [1, 1],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setSelectedImage(result.assets[0].uri);
//     }
//     setModalVisible(false);
//   };

//  <View style={styles.imageView}>
//         <TouchableOpacity style={styles.imageFrame} onPress={() => setModalVisible(true)}>
//             {selectedImage ? (
//               <Image source={{ uri: selectedImage }} style={styles.image} />
//             ) : (
//               <Text style={styles.placeholderText}>Upload Image</Text>
//                       )}
//       </TouchableOpacity>                
//           </View>
{/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Choose an Option</Text>
            <View style={styles.modalBtnView}>
            <TouchableOpacity style={styles.modalButton} onPress={openCamera}>
              <Text style={styles.modalButtonText}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={openGallery}>
              <Text style={styles.modalButtonText}>Choose from Gallery</Text>
              </TouchableOpacity>
            </View>  
            <TouchableOpacity
              style={[styles.modalButton, { backgroundColor: "transparent" }]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>       */}

// imageView: {
//     alignItems: "center",
//   },
//   imageFrame: {
//     width: 180,
//     height: 180,
//     borderWidth: 2,
//     borderColor: "#ccc",
//     borderRadius: 100,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#222",
//     marginTop: '10%',
//   },
//   placeholderText: {
//     color: "#fff",
//     fontSize: 16,
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//     borderRadius: 100,
//   },

//  modalOverlay: {
//     flex: 1,
//     // justifyContent: "center",
//     // alignItems: "center",
//      // backgroundColor: "rgba(0, 0, 0, 0.5)",
//     position: 'absolute',
//     bottom: '0%',
//     width:'100%', 
//   },
//   modalContainer: {
//     width: "100%",
//     backgroundColor: "#333",
//     borderRadius: 10,
//     padding: 20,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 20,
//     color:"#fff",
//   },
//   modalBtnView:{
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     gap: '10%'
//   },
//   modalButton: {
//     // width: "100%",
//     padding: 15,
//     backgroundColor: "#00564D",
//     borderRadius: 8,
//     alignItems: "center",
//     marginVertical: "1%",
//   },
//   modalButtonText: {
//     color: "#fff",
//     fontSize: 16,
//   },