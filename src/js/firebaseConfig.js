import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsaJ9MGe15UK73M3gKCoyGH7mzAXH4BYY",
  authDomain: "escala-78b0a.firebaseapp.com",
  projectId: "escala-78b0a",
  storageBucket: "escala-78b0a.firebasestorage.app",
  messagingSenderId: "990413571485",
  appId: "1:990413571485:web:0f7af3cddb3d826fb29b74",
  measurementId: "G-EFBTV68QY0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);
