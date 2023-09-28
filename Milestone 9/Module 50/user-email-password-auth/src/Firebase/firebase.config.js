// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCccD7_1Om42aaStKkvcIw0e0c8qqzIjTU",
  authDomain: "user-email-password-auth-f1515.firebaseapp.com",
  projectId: "user-email-password-auth-f1515",
  storageBucket: "user-email-password-auth-f1515.appspot.com",
  messagingSenderId: "743689167165",
  appId: "1:743689167165:web:2202ea5a8b0c77411da554"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;