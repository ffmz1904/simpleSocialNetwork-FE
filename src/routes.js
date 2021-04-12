import * as ROUTE from './utils/routesConstants';
import Auth from "./pages/Auth";
import Home from './pages/Home';
import User from './pages/User';
import People from './pages/People';

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
        path: ROUTE.USER_ROUTE + '/:id',
        Component: User
    },
    {
        path: ROUTE.PEOPLE_ROUTE,
        Component: People
    }
];

export const authRoutes = [];
