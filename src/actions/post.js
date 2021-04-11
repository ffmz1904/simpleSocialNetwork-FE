import * as postApi from '../http/postAPI';
import { SET_POSTS } from '../utils/actionsConstants';

const setPosts = data => ({
    type: SET_POSTS,
    data
});

export const getAllPost = (id = null) => async dispatch => {
    const response = await postApi.getAllPosts(id);
    return response.post;
}
