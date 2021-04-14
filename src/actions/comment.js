import * as commentAPI from '../http/commentAPI';
import {SET_COMMENTS, ADD_COMMENT, REMOVE_COMMENT} from '../utils/actionsConstants';

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
    dispatch(setComments(postId, response.comments));
};

export const createComment = (data) => async dispatch => {
    const {comment} = await commentAPI.createComment(data);
    dispatch(addComment(comment.postId, comment));
};

export const removeComment = (commentId, postId) => async dispatch => {
    const { removedId } = await commentAPI.removeComment(commentId);
    dispatch(deleteComment(removedId, postId));
};
