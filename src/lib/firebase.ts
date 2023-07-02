import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyKRPGghIhGckafC_fZOAmXzYxRi82Vzo",
  authDomain: "dractal-site.firebaseapp.com",
  projectId: "dractal-site",
  storageBucket: "dractal-site.appspot.com",
  messagingSenderId: "864406471527",
  appId: "1:864406471527:web:4a1a171e285b6122abe5c2",
  measurementId: "G-1L2EYTSHH8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
