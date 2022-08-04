import { useEffect } from 'react';
import * as authService from '../../services/authService';

export const Logout = () => {
    useEffect(() => {
        authService.logout();
    }, []);

    return null;
}