import {LOGIN, LOGOUT, CHECK_AUTH, SET_FRIENDS, UPDATE_PROFILE} from '../utils/actionsConstants';

const defaultState = {
    isAuth: false,
    data: {}
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN:
        case CHECK_AUTH:
            return { ...state, isAuth: true, data: action.data }
        case LOGOUT:
            return { ...defaultState };
        case SET_FRIENDS:
            return { ...state, data: { ...state.data, friends: action.friends } };
        case UPDATE_PROFILE:
            return { ...state, data: { ...action.data } };
        default:
            return state;
    }
};
