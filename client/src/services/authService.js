import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

import { auth } from "../firebase";

export const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

export const register = (email, password) => {
    console.log('registering');
    debugger
    return createUserWithEmailAndPassword(auth, email, password)
}

export const logout = () => {
    return signOut(auth);
}

// export const useAuth = () => {
//     const [currentUser, setCurrentUser] = useState(null);

//     useEffect(() => {
//         onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 // const uid = user.uid;

//                 const unsub = setCurrentUser(user);
//                 return unsub;
//               } else {
//                 // User is signed out
//                 const unsub = setCurrentUser(null);
//                 return unsub;
//               }
//         })
//     }, []);

//     return currentUser;
// }
