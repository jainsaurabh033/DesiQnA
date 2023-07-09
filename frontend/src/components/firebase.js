// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6x1c4SZoReRo8GHlGfO1i9H_MF84kBDY",
  authDomain: "desiqna-85f6d.firebaseapp.com",
  projectId: "desiqna-85f6d",
  storageBucket: "desiqna-85f6d.appspot.com",
  messagingSenderId: "14038591960",
  appId: "1:14038591960:web:76d758a9023d5297f8eaad",
  measurementId: "G-DZBS05FNV4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
