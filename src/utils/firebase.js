// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr_FvRlDbe0GHC0JazSsiZdGJ8kY-Wm4o",
  authDomain: "netflix-gpt-f03f9.firebaseapp.com",
  projectId: "netflix-gpt-f03f9",
  storageBucket: "netflix-gpt-f03f9.appspot.com",
  messagingSenderId: "1081187400531",
  appId: "1:1081187400531:web:5e515aae790742cac57fa6",
  measurementId: "G-MBP24NEGP6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();