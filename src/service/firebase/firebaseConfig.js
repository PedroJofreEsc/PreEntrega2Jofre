

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFnI39TRQb_393SvKmlFS0LeWHpnkP71c",
  authDomain: "backend-cfd3f.firebaseapp.com",
  projectId: "backend-cfd3f",
  storageBucket: "backend-cfd3f.appspot.com",
  messagingSenderId: "823103122395",
  appId: "1:823103122395:web:1300059b36f11e6d7815fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
