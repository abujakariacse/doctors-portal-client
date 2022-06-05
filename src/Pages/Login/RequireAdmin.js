import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading/Loading';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [role, adminLoading] = useAdmin(user);
    const location = useLocation();
    if (loading || adminLoading) {
        return <Loading></Loading>
    }
    if (!user || role !== 'admin') {
        return <Navigate to='*' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAdmin;