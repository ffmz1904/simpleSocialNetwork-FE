import { SET_POSTS, SET_COMMENTS } from '../utils/actionsConstants';

const defaultState = [];

export default (state = defaultState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return [...action.data];
        case SET_COMMENTS:
            return [...state.map(post => post._id === action.postId
                    ? { ...post, commentsData: action.data }
                    : post
                )];
        default:
            return state;
    }
};
