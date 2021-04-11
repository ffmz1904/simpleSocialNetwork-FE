import {LOGIN, LOGOUT, REGISTRATION} from '../utils/actionsConstants';

const defaultState = {
    isAuth: false,
    data: {}
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, isAuth: true, data: action.data }
        case LOGOUT:
            return { ...defaultState };
        default:
            return state;
    }
};
