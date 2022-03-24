// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPwUKhEowGd7v7kFiv5Lh7aRZ27Wo5iaI",
  authDomain: "todo-34abf.firebaseapp.com",
  projectId: "todo-34abf",
  storageBucket: "todo-34abf.appspot.com",
  messagingSenderId: "896566928377",
  appId: "1:896566928377:web:e09acc17e2fb812a871328"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
const auth = getAuth(app);
export {app, db, auth, firebaseConfig}