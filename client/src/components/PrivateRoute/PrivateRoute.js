import { Navigate, Outlet } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';

const PrivateRoute = ({children}) => {
    const { currentUser } = useAuthContext();
    
    if (!(currentUser?.uid.length > 0)) {
        return <Navigate to="/login" replace />
    }

    return children ? children : <Outlet />  
};

export default PrivateRoute;