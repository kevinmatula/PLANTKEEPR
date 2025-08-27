// firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCfq26uoX-a5UHPNKNleokhLgZbn0Xrwk",
  authDomain: "plantkeepr.firebaseapp.com",
  projectId: "plantkeepr",
  storageBucket: "plantkeepr.firebasestorage.app",
  messagingSenderId: "1059712232880",
  appId: "1:1059712232880:web:a36282fc2b6ab2cac3ba75",
  measurementId: "G-577VGS7NPV",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
