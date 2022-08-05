import { createContext, useContext } from "react";
import { useAuth } from "../hooks/useAuth";
import * as authService from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const currentUser = useAuth();

    const userLogin = (email, password) => {
        authService.login(email, password);
    };

    const userRegister = (email, password) => {
        authService.register(email, password);
    };

    const userLogout = () => {
        authService.logout({});
    };

    return (
        <AuthContext.Provider value={{
            currentUser,
            userLogin,
            userRegister,
            userLogout,
            // isAuthenticated: !!auth.accessToken
        }}>
            {children}
        </AuthContext.Provider>  
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};