// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALwM8sNIpXiMhq28lkFqF9EIORDWsbdV4",
  authDomain: "appcoderhouse-abc66.firebaseapp.com",
  databaseURL: "https://appcoderhouse-abc66-default-rtdb.firebaseio.com",
  projectId: "appcoderhouse-abc66",
  storageBucket: "appcoderhouse-abc66.appspot.com",
  messagingSenderId: "1254044453",
  appId: "1:1254044453:web:d6f2f7472f2a4410f6e0cc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firebase_auth = getAuth(app);