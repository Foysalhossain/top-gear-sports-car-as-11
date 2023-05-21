import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    if (user?.email) {
        return children;
    }
    else {
        alert('You have to log in first to view details');
    }

    return (
        <Navigate state={{ from: location }} to='/login' replace></Navigate>
    );
};

export default PrivateRoute;