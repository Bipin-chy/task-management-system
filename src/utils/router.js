
import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import routes from './routes';
import { useAuth } from './AuthContext';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import LandingPage from '../pages/LandingPage';

const PrivateRoutes = () => {
    const { authenticated } = useAuth();

    return (
        authenticated ? <Outlet /> : <Navigate to={'/login'} />
    );
};

const AppRouter = () => {

    return (

        <Routes>
            <Route element={<PrivateRoutes />}>
                {/* {routes.map(({ path, element }, index) => ( */}
                <Route
                    path={'/dashboard'}
                    element={<Dashboard />}
                />
                {/* ))} */}
            </Route>
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    );
};

export default AppRouter;
