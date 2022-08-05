import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signout } from '../../firebase';
import * as authService from '../../services/authService';

export const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        handleLogout();
        navigate('/');
    }, []);

    return null;
}

async function handleLogout() {
    try {
        await signout();
    } catch (error) {
        console.log(error);
    }
}