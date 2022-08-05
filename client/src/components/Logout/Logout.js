import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

export const Logout = () => {
    const navigate = useNavigate();
    const { userLogout } = useAuthContext();

    useEffect(() => {
        handleLogout(userLogout);
        navigate('/');
    }, []);

    return null;
}

async function handleLogout(userLogout) {
    try {
        await userLogout();
    } catch (error) {
        console.log(error);
    }
}