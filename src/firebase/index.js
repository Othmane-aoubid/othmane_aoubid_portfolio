/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9fwUByZMNkSMuvY_BuugbkLFSjK1fDBQ",
  authDomain: "portfolio-473c0.firebaseapp.com",
  projectId: "portfolio-473c0",
  storageBucket: "portfolio-473c0.appspot.com",
  messagingSenderId: "336894858772",
  appId: "1:336894858772:web:5146739e5e82098a2f3901",
  measurementId: "G-7CRDYYT2TV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { storage, ref, getDownloadURL, analytics };