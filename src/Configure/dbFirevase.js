// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApkjIRben13MLrRUHZIfskf8m8UBVyxOA",
  authDomain: "proyec-4-1f40c.firebaseapp.com",
  projectId: "proyec-4-1f40c",
  storageBucket: "proyec-4-1f40c.appspot.com",
  messagingSenderId: "474275531353",
  appId: "1:474275531353:web:bd51f5bece847d7ac93f48",
  measurementId: "G-P7GHEP7NNQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db