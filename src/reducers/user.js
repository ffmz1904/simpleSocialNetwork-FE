import {LOGIN, LOGOUT, CHECK_AUTH} from '../utils/actionsConstants';

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
        default:
            return state;
    }
};
