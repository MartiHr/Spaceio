// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIHRaXYcY1jjd52Hf35H19NIb0zWF5bjU",
  authDomain: "spaceio12.firebaseapp.com",
  projectId: "spaceio12",
  storageBucket: "spaceio12.appspot.com",
  messagingSenderId: "98824999115",
  appId: "1:98824999115:web:b7fb60c3867f515160cb4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();