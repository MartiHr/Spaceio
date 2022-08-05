// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
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

const auth = getAuth();

export const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

export const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

export const signout = () => {
    return signOut(auth);
}

export const useAuth = () => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // const uid = user.uid;

                const unsub = setCurrentUser(user);
                return unsub;
              } else {
                // User is signed out
                const unsub = setCurrentUser(null);
                return unsub;
              }
        })
    }, []);

    return currentUser;
}