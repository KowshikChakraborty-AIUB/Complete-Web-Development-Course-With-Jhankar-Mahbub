// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8Pv53LdiVdAoNqKBLcRflLEIV6yH59b0",
  authDomain: "auth-moha-milon-39b20.firebaseapp.com",
  projectId: "auth-moha-milon-39b20",
  storageBucket: "auth-moha-milon-39b20.appspot.com",
  messagingSenderId: "478152045794",
  appId: "1:478152045794:web:a4c7aa9031f6d2f7975abb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;