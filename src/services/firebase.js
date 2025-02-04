// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV606VJHfyfQne9iTP4ziEhrkZDLOGIDI",
  authDomain: "fir-project-edda5.firebaseapp.com",
  projectId: "fir-project-edda5",
  storageBucket: "fir-project-edda5.appspot.com",
  messagingSenderId: "990083616874",
  appId: "1:990083616874:web:c716bd460aabf53aa93a13",
  measurementId: "G-TTMEYR1Y13",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();