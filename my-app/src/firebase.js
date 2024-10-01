// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyAVNctLqGoVoH47FRkWUQwaGMuEzoOPkjs",
  authDomain: "lecture-repository.firebaseapp.com",
  projectId: "lecture-repository",
  storageBucket: "lecture-repository.appspot.com",
  messagingSenderId: "221465682253",
  appId: "1:221465682253:web:579b2dd1c5907cdc621704"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const db = getFirestore(app);
