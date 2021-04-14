import * as userApi from '../http/userAPI';
import {LOGIN, LOGOUT, CHECK_AUTH, SET_PEOPLE, SET_FRIENDS, UPDATE_PROFILE} from '../utils/actionsConstants';
import {setError} from "./error";

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

const setPeople = data => ({
    type: SET_PEOPLE,
    data
});

const updateFriendsList = (userFriends) => ({
    type: SET_FRIENDS,
    userFriends
});

const updateUser = data => ({
    type: UPDATE_PROFILE,
    data
});

export const registration = userData => async dispatch => {
    const response = await userApi.registration(userData);

    if (!response.success) {
        return dispatch(setError(response.message));
    }

    return true;
}

export const login = userData => async dispatch => {
    const response = await userApi.login(userData);

    if (!response.success) {
        return dispatch(setError(response.message));
    }

    localStorage.setItem('token', response.token);
    dispatch(setUserData(response.user));
    return true;
}

export const logout = () => async dispatch => {
    localStorage.removeItem('token');
    dispatch(removeUserData());
};

export const checkAuth = () => async dispatch => {
    const response = await userApi.check();

    if (!response.success) {
        return false;
    }

    localStorage.setItem('token', response.token);
    dispatch(checkUser(response.user));
};

export const getUserDataById = id => async dispatch => {
    const response = await userApi.getUserById(id);

    if (!response.success) {
        return dispatch(setError(response.message));
    }

    return response.user;
};

export const getAllUsers = (nameFilter = null) => async dispatch => {
    const response = await userApi.getAllUsers(nameFilter);

    if (!response.success) {
        return dispatch(setError(response.message));
    }

    dispatch(setPeople(response.users));
};

export const subscribe = userId => async dispatch => {
    const response = await userApi.subscribe({ subscribeTo: userId });

    if (!response.success) {
        return dispatch(setError(response.message));
    }

    dispatch(updateFriendsList(response.userFriends));
};

export const confirmSubscribing = friendId => async dispatch => {
    const response = await userApi.confirmSubscribing({ friendId });

    if (!response.success) {
        return dispatch(setError(response.message));
    }

    dispatch(updateFriendsList(response.userFriends));
};

export const unsubscribe = unsubscribedId => async dispatch => {
    const response = await userApi.unsubscribe({ unsubscribedId });

    if (!response.success) {
        return dispatch(setError(response.message));
    }

    dispatch(updateFriendsList(response.userFriends));
};

export const getFriends = id => async dispatch => {
    const response = await userApi.getUserFriendsData(id);

    if (!response.success) {
        return dispatch(setError(response.message));
    }

    return response.friendsData;
};

export const updateProfile = update => async dispatch => {
    const response = await userApi.updateUserData(update);

    if (!response.success) {
        return dispatch(setError(response.message));
    }

    dispatch(updateUser(response.user));
};
