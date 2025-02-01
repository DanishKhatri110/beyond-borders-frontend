// firebaseConfig.js
import { initializeApp } from "firebase/app";
// import { getAuth, getReactNativePersistance } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';

import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
    apiKey: "AIzaSyCQzhbPbP0sHOTIzk7dYQ3u5kMrt_TKCns",
    authDomain: "meeting-app-a2d41.firebaseapp.com",
    projectId: "meeting-app-a2d41",
    storageBucket: "meeting-app-a2d41.firebasestorage.app",
    messagingSenderId: "1072094153083",
    appId: "1:1072094153083:web:78fd5a98abd112106315de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { auth };
