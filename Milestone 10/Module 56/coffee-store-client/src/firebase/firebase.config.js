// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe38VpYINIFBMEyvtk4Q87VpqaRUrJbno",
  authDomain: "coffee-store-258c5.firebaseapp.com",
  projectId: "coffee-store-258c5",
  storageBucket: "coffee-store-258c5.appspot.com",
  messagingSenderId: "840460880179",
  appId: "1:840460880179:web:2e3582813d7323f5c45646"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;