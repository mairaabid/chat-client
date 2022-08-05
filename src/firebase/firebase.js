import firebase from "firebase/app";
import * as firebaseui from "firebaseui";
import "firebase/database";
import "firebase/storage";

// import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF5kdTI6B2kjIiTAR5PHjgYI2hy5V4T70",
  authDomain: "chat-buddy-c5e55.firebaseapp.com",
  projectId: "chat-buddy-c5e55",
  storageBucket: "chat-buddy-c5e55.appspot.com",
  messagingSenderId: "159678389101",
  appId: "1:159678389101:web:a5d664397562e781f09864",
  measurementId: "G-MMSTXFMJTK",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebaseDb.initializeApp(firebaseConfig);

const database = firebase.database;

const firebaseUi = new firebaseui.auth.AuthUI(firebase.auth());

const storage = firebase.storage();

export { firebase, firebaseUi, storage, database as default };
