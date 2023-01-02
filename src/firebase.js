// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtRQv9EzGdJksGdSBe7dq5OVj8ICgTAN0",
  authDomain: "realtor-clone-951dc.firebaseapp.com",
  projectId: "realtor-clone-951dc",
  storageBucket: "realtor-clone-951dc.appspot.com",
  messagingSenderId: "634513104871",
  appId: "1:634513104871:web:a89775327f36c3b086e742"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();