import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDy-UgSp4weo2sTzJxTiIuWeYOklCzWMcI",
  authDomain: "chat-app-75ae5.firebaseapp.com",
  databaseURL: "https://chat-app-75ae5.firebaseio.com",
  projectId: "chat-app-75ae5",
  storageBucket: "chat-app-75ae5.appspot.com",
  messagingSenderId: "404332746183",
  appId: "1:404332746183:web:e066ad5c5efb1d10"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db, firebase };
