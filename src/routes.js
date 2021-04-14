import * as ROUTE from './utils/routesConstants';
import Auth from "./pages/Auth";
import Home from './pages/Home';
import User from './pages/User';
import People from './pages/People';
import Friends from './pages/Friends';
import Settings from "./pages/Settings";

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
    },
    {
        path: ROUTE.FRIENDS_ROUTE + '/:id',
        Component: Friends
    }
];

export const authRoutes = [
    {
        path: ROUTE.SETTINGS_ROUTE,
        Component: Settings
    }
];
