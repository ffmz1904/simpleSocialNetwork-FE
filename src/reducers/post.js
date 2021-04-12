import { SET_POSTS, SET_COMMENTS, ADD_COMMENT } from '../utils/actionsConstants';

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
        case ADD_COMMENT:
            return [...state.map(post => post._id === action.postId
                ? { ...post, commentsData: [ ...post.commentsData, action.data ] }
                : post
            )];
        default:
            return state;
    }
};
