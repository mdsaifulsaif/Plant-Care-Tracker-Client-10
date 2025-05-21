// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTsy5f0n1TB4M0oEmladeGHwKPMNry9b4",
  authDomain: "plant-care-568be.firebaseapp.com",
  projectId: "plant-care-568be",
  storageBucket: "plant-care-568be.firebasestorage.app",
  messagingSenderId: "992345727108",
  appId: "1:992345727108:web:23f7942fec31b8877ae2d1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
