// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3LwsBxmHbqfWKgQWauPZ-uf4IlV20Egw",
  authDomain: "user-task-e9a27.firebaseapp.com",
  projectId: "user-task-e9a27",
  storageBucket: "user-task-e9a27.appspot.com",
  messagingSenderId: "866062710095",
  appId: "1:866062710095:web:bdd5c1fcf63caa1087813a",
  measurementId: "G-Y0Y8WEQWHY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;