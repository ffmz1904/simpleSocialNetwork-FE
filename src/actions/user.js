import * as userApi from '../http/userAPI';
import { LOGIN, LOGOUT, CHECK_AUTH } from '../utils/actionsConstants';

const setUserData = data => ({
    type: LOGIN,
    data
});

const removeUserData = () => ({
   type: LOGOUT
});

const checkUser = data => ({
    type: CHECK_AUTH,
    data
});

export const registration = userData => async dispatch => {
    const response = await userApi.registration(userData);
}

export const login = userData => async dispatch => {
    const response = await userApi.login(userData);
    localStorage.setItem('token', response.token);
    dispatch(setUserData(response.user));
}

export const logout = () => async dispatch => {
    localStorage.removeItem('token');
    dispatch(removeUserData());
};

export const checkAuth = () => async dispatch => {
    const response = await userApi.check();
    localStorage.setItem('token', response.token);
    dispatch(checkUser(response.user));
};

export const getUserDataById = id => async dispatch => {
    const response = await userApi.getUserById(id);
    return response.user;
};

export const subscribe = userId => async dispatch => {
    const response = await userApi.subscribe({ userId });
    console.log(response)
};
