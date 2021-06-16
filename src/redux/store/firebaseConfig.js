import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBunDS6NXx905XoUqnn98uCMiRdFSLuorI",
  authDomain: "inventory-management-f9129.firebaseapp.com",
  projectId: "inventory-management-f9129",
  storageBucket: "inventory-management-f9129.appspot.com",
  messagingSenderId: "702555894698",
  appId: "1:702555894698:web:e684a590201d4ae4fcb1d3"
};

let Firebase =firebase.initializeApp(firebaseConfig);

// export const database=firebase.firestore();
// export const auth = firebase.auth();
export default Firebase;