// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEw0uQlwvia7elPFoUpLZywrEaNXotqUs",
  authDomain: "dragon-news-85d4f.firebaseapp.com",
  projectId: "dragon-news-85d4f",
  storageBucket: "dragon-news-85d4f.appspot.com",
  messagingSenderId: "432932426464",
  appId: "1:432932426464:web:fee501d3ccf221849af685"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp