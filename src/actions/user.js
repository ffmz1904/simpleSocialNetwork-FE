import * as userApi from '../http/userAPI';
import { REGISTRATION, LOGIN, LOGOUT } from '../utils/actionsConstants';

const setUserData = (data) => ({
    type: LOGIN,
    data
});

const removeUserData = () => ({
   type: LOGOUT
});

export const registration = userData => async dispatch => {
    const response = await userApi.registration(userData);
    console.log(response);
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
