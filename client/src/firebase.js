// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-8be6c.firebaseapp.com",
  projectId: "mern-estate-8be6c",
  storageBucket: "mern-estate-8be6c.appspot.com",
  messagingSenderId: "645264202322",
  appId: "1:645264202322:web:af6a65e326dfa7629a5d8b"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const app = initializeApp(firebaseConfig);
