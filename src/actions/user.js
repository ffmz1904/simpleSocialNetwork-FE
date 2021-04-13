import * as userApi from '../http/userAPI';
import {LOGIN, LOGOUT, CHECK_AUTH, SET_PEOPLE, SET_FRIENDS} from '../utils/actionsConstants';

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

const updateFriendsList = friends => ({
    type: SET_FRIENDS,
    friends
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

export const getAllUsers = (nameFilter = null) => async dispatch => {
    const {users} = await userApi.getAllUsers(nameFilter);
    dispatch(setPeople(users));
};

export const subscribe = userId => async dispatch => {
    const { userFriends } = await userApi.subscribe({ subscribeTo: userId });
    dispatch(updateFriendsList(userFriends));
};

export const confirmSubscribing = friendId => async dispatch => {
    const { userFriends } = await userApi.confirmSubscribing({ friendId });
    dispatch(updateFriendsList(userFriends));
};

export const unsubscribe = unsubscribedId => async dispatch => {
    const { userFriends } = await userApi.unsubscribe({ unsubscribedId });
    dispatch(updateFriendsList(userFriends));
};
