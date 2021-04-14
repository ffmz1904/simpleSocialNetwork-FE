import * as postApi from '../http/postAPI';
import {ADD_POST, REMOVE_POST, SET_POSTS, UPDATE_POST} from '../utils/actionsConstants';
import {setError} from "./error";

const setPosts = data => ({
    type: SET_POSTS,
    data
});

const addPost = data => ({
    type: ADD_POST,
    data
});

const updatePostData = data => ({
    type: UPDATE_POST,
    data
});

const deletePost = id => ({
    type: REMOVE_POST,
    id
});

export const getAllPost = (id = null) => async dispatch => {
    const response = await postApi.getAllPosts(id);

    if (!response.success) {
        return dispatch(setError(response.message));
    }

    dispatch(setPosts(response.posts));
    return response.posts;
};

export const createPost = postData => async dispatch => {
    const response = await postApi.createPost(postData);

    if (!response.success) {
        return dispatch(setError(response.message));
    }

    dispatch(addPost(response.post));
};

export const updatePost = (postId, update) => async dispatch => {
    const response = await postApi.updatePost(postId, { update });

    if (!response.success) {
        return dispatch(setError(response.message));
    }

    dispatch(updatePostData(response.post));
};

export const removePost = postId => async dispatch => {
    const response = await postApi.removePost(postId);

    if (!response.success) {
        return dispatch(setError(response.message));
    }

    dispatch(deletePost(response.removedId));
};
