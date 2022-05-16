import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

  const firebaseConfig = {
    apiKey: "AIzaSyA8cm3Xa1XESDPBVmxdCxV6eQc1WVobsts",
    authDomain: "workshop-sprint-3.firebaseapp.com",
    projectId: "workshop-sprint-3",
    storageBucket: "workshop-sprint-3.appspot.com",
    messagingSenderId: "419372152751",
    appId: "1:419372152751:web:f203d4b3333a41ce9d615a"
  };
   
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const googleAuthProvider = new GoogleAuthProvider();
  const facebookAuthProvider = new FacebookAuthProvider();
  const db = getFirestore()

  export {
    app,
    googleAuthProvider,
    facebookAuthProvider,
    db
  }
