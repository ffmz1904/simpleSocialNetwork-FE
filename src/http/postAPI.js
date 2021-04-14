import {$host, $authHost} from './index';

export const getAllPosts = async id => {
    const url = id ? `api/post/?id=${id}` : 'api/post';

    try {
        const {data} = await $host.get(url);
        return data;
    } catch (e) {
        const {data} = e.response;
        return data;
    }
};

export const createPost = async postData => {
    try {
        const {data} = await $authHost.post('api/post', postData);
        return data;
    } catch (e) {
        const {data} = e.response;
        return data;
    }
};

export const updatePost = async (postId, update) => {
    try {
        const {data} = await $authHost.put(`api/post/${postId}`, update);
        return data;
    } catch (e) {
        const {data} = e.response;
        return data;
    }
};

export const removePost = async postId => {
    try {
        const {data} = await $authHost.delete(`api/post/${postId}`);
        return data;
    } catch (e) {
        const {data} = e.response;
        return data;
    }
};
