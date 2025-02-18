// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo9mWwTz2v7KN785BDQ3W14B99DVrvMe8",
  authDomain: "vietlearn-c1b4c.firebaseapp.com",
  projectId: "vietlearn-c1b4c",
  storageBucket: "vietlearn-c1b4c.firebasestorage.app",
  messagingSenderId: "446743830755",
  appId: "1:446743830755:web:d23f409905ac95aa1e25d6",
  measurementId: "G-HT6LLE9WB7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = initializeAuth(app)