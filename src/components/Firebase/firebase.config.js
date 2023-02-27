// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtJWxik1gyS_7gF746ouPRyfLlEjGUgrw",
  authDomain: "techzone-1dad6.firebaseapp.com",
  projectId: "techzone-1dad6",
  storageBucket: "techzone-1dad6.appspot.com",
  messagingSenderId: "967578766111",
  appId: "1:967578766111:web:c7bb5cf829854645e07e2a",
  measurementId: "G-TJB29BQHPL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;