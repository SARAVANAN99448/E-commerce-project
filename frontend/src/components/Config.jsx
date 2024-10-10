// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5aGB0D9Y_R4qCatEAYAZfiGvvv9sPEtU",
  authDomain: "clothes-f883d.firebaseapp.com",
  projectId: "clothes-f883d",
  storageBucket: "clothes-f883d.appspot.com",
  messagingSenderId: "903047062740",
  appId: "1:903047062740:web:05ead8b3174ab17b6f0741",
  measurementId: "G-0P4ZL2VG3K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth