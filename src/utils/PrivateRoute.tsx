import { Outlet, Navigate } from 'react-router-dom'
import { checkLoggedIn } from '../auth/check-loggedIn'

export function PrivateRoutes() {
    if (checkLoggedIn()) {
        return <Outlet />;
    } else {
        return <Navigate to="/" />;
    }
}

