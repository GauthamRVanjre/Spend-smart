// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXBy327J5Q2m4Cn4Nq3l50zOff_wfocYg",
  authDomain: "spend-smart-e035e.firebaseapp.com",
  projectId: "spend-smart-e035e",
  storageBucket: "spend-smart-e035e.appspot.com",
  messagingSenderId: "128730389097",
  appId: "1:128730389097:web:dec2ff49873a180b6fe0f8",
  measurementId: "G-1R2PK58WE0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// initialize authentication
const auth = getAuth(app);

// initialize firestore
const db = getFirestore(app);

export { auth, db, app };
