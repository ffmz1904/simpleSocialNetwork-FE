import * as commentAPI from '../http/commentAPI';
import {SET_COMMENTS, ADD_COMMENT, REMOVE_COMMENT} from '../utils/actionsConstants';
import {setError} from "./error";

const setComments = (postId, data) => ({
    type: SET_COMMENTS,
    postId,
    data
});

const addComment = (postId, data) => ({
    type: ADD_COMMENT,
    postId,
    data
});

const deleteComment = (commentId, postId) => ({
    type: REMOVE_COMMENT,
    commentId,
    postId
});

export const getAllPostComments = (postId) => async dispatch => {
    const response = await commentAPI.getAllComments(postId);

    if (!response.success) {
        return dispatch(setError(response.message));
    }

    dispatch(setComments(postId, response.comments));
};

export const createComment = (data) => async dispatch => {
    const response = await commentAPI.createComment(data);

    if (!response.success) {
        return dispatch(setError(response.message));
    }

    dispatch(addComment(response.comment.postId, response.comment));
};

export const removeComment = (commentId, postId) => async dispatch => {
    const response = await commentAPI.removeComment(commentId);

    if (!response.success) {
        return dispatch(setError(response.message));
    }

    dispatch(deleteComment(response.removedId, postId));
};
