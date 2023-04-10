// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjjcE24Lk9h3xYzHgx3Y0PLWEJi5vSZ8Y",
  authDomain: "galleria-6d3ad.firebaseapp.com",
  databaseURL: "https://galleria-6d3ad-default-rtdb.firebaseio.com",
  projectId: "galleria-6d3ad",
  storageBucket: "galleria-6d3ad.appspot.com",
  messagingSenderId: "1033193124612",
  appId: "1:1033193124612:web:69a191ba50ef2bf88d9651",
  measurementId: "G-46P8SSKXJZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {database}