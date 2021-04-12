import * as commentAPI from '../http/commentAPI';
import { SET_COMMENTS } from '../utils/actionsConstants';

const setComments = (postId, data) => ({
    type: SET_COMMENTS,
    postId,
    data
});

export const getAllPostComments = (postId) => async dispatch => {
    const response = await commentAPI.getAllComments(postId);
    dispatch(setComments(postId, response.comments));
}
