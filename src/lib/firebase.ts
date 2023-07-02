import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { FB_API_KEY } from "$env/static/private";

const firebaseConfig = {
  apiKey: FB_API_KEY,
  authDomain: "dractal-site.firebaseapp.com",
  projectId: "dractal-site",
  storageBucket: "dractal-site.appspot.com",
  messagingSenderId: "864406471527",
  appId: "1:864406471527:web:4a1a171e285b6122abe5c2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
