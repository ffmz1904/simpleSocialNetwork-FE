import { SET_PEOPLE } from '../utils/actionsConstants';

const defaultState = [];

export default (state = defaultState, action) => {
    switch (action.type) {
        case SET_PEOPLE:
            return [ ...action.data ];
        default:
            return state;
    }
};
