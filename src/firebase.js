// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN0nIx33ny6Eyu0-y4XrlAx5m09zwrJHA",
  authDomain: "downright-auto-care-site.firebaseapp.com",
  projectId: "downright-auto-care-site",
  storageBucket: "downright-auto-care-site.firebasestorage.app",
  messagingSenderId: "844449294350",
  appId: "1:844449294350:web:df76995a249a2c5b01345f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export Firestore
export const db = getFirestore(app);
