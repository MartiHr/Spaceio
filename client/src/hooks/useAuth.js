import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

import { auth } from "../firebase";
import { useLocalStorage } from "./useLocalStorage";

export const useAuth = () => {
    const [currentUser, setCurrentUser] = useLocalStorage('user', {});

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