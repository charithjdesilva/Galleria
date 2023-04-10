// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjjcE24Lk9h3xYzHgx3Y0PLWEJi5vSZ8Y",
  authDomain: "galleria-6d3ad.firebaseapp.com",
  projectId: "galleria-6d3ad",
  storageBucket: "galleria-6d3ad.appspot.com",
  messagingSenderId: "1033193124612",
  appId: "1:1033193124612:web:a2f6e8d422af13ac8d9651",
  measurementId: "G-Q7RPTZQMW9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const database = firebase.database();

export default database