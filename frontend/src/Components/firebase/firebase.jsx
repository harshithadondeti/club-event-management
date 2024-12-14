// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail
} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_YhKZ8GxqRxbUf8T3UQI9B4RX_xW8N2U",
  authDomain: "club-event-managing.firebaseapp.com",
  projectId: "club-event-managing",
  storageBucket: "club-event-managing.appspot.com",
  messagingSenderId: "260658766604",
  appId: "1:260658766604:web:a996dfcad131fab896df29",
  measurementId: "G-FP4MDD5FR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}