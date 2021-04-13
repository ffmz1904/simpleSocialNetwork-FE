import {$host, $authHost} from './index';

export const getAllPosts = async id => {
    const url = id ? `api/post/?id=${id}` : 'api/post';
    const {data} = await $host.get(url);
    return data;
};

export const createPost = async postData => {
    const {data} = await $authHost.post('api/post', postData);
    return data;
};

export const updatePost = async (postId, update) => {
    const {data} = await $authHost.put(`api/post/${postId}`, update);
    return data;
};

export const removePost = async postId => {
    const {data} = await $authHost.delete(`api/post/${postId}`);
    return data;
};
