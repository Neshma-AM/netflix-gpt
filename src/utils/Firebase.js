// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD_DcTOxtiWd1392O4oXvoNqLmivh9hklQ",
  authDomain: "netflixgpt-f0ba3.firebaseapp.com",
  projectId: "netflixgpt-f0ba3",
  storageBucket: "netflixgpt-f0ba3.appspot.com",
  messagingSenderId: "1046417073316",
  appId: "1:1046417073316:web:27bb0c80e29ec5c2cff231",
  measurementId: "G-ZTXDYLQL89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();