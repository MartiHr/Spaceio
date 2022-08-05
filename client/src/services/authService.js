// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// import {auth} from '../firebase';

// export const register = (email, password) => {

//     createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             const user = userCredential.user;
//             console.log(user);
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;

//             console.log(`Error message: ${errorMessage}, error code: ${errorCode}`);
//         });

// }

// export const login = (email, password) => {
    
//     signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             const user = userCredential.user;

//             console.log(user);
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;

//             console.log(`Error message: ${errorMessage}, error code: ${errorCode}`);
//         });
// }


// export const logout = (email, password) => {

//     signOut(auth).then(() => {
//         console.log('Sign-out successful!');
//     }).catch((error) => {
//         console.log(error);
//     });
// }