// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "pro-estate.firebaseapp.com",
  projectId: "pro-estate",
  storageBucket: "pro-estate.appspot.com",
  messagingSenderId: "50056624695",
  appId: "1:50056624695:web:4cc7a87dfa9f02de071db2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
