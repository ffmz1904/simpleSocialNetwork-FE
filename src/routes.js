import * as ROUTE from './utils/routesConstants';
import Auth from './pages/Auth';
import Home from './pages/Home';
import User from './pages/User';

export const publicRoutes = [
    {
        path: ROUTE.LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: ROUTE.REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: ROUTE.HOME_ROUTE,
        Component: Home
    },
    {
        path: ROUTE.USER_ROUTE,
        Component: User
    }
];

export const authRoutes = [

];
