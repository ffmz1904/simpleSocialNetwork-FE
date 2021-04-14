import * as postApi from '../http/postAPI';
import {ADD_POST, REMOVE_POST, SET_POSTS, UPDATE_POST} from '../utils/actionsConstants';

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
    dispatch(setPosts(response.posts));
    return response.posts;
};

export const createPost = postData => async dispatch => {
    const {post} = await postApi.createPost(postData);
    dispatch(addPost(post));
};

export const updatePost = (postId, update) => async dispatch => {
    const {post} = await postApi.updatePost(postId, { update });
    dispatch(updatePostData(post));
};

export const removePost = postId => async dispatch => {
    const {removedId} = await postApi.removePost(postId);
    dispatch(deletePost(removedId));
};
