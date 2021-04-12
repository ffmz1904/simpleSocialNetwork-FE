import * as postApi from '../http/postAPI';
import {ADD_POST, SET_POSTS} from '../utils/actionsConstants';

const setPosts = data => ({
    type: SET_POSTS,
    data
});

const addPost = data => ({
    type: ADD_POST,
    data
});

export const getAllPost = (id = null) => async dispatch => {
    const response = await postApi.getAllPosts(id);
    dispatch(setPosts(response.posts));
    return response.posts;
};

export const createPost = postData => async dispatch => {
    const {post} = await postApi.createPost(postData);
    dispatch(addPost(post));
};
