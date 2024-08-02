// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blogtimes-68e4a.firebaseapp.com",
  projectId: "blogtimes-68e4a",
  storageBucket: "blogtimes-68e4a.appspot.com",
  messagingSenderId: "1038487167713",
  appId: "1:1038487167713:web:52a11c4560dff7ca094da0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);