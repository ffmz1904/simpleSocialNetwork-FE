import {$host, $authHost} from './index';

export const getAllComments = async (postId) => {
    const url = postId ? `api/comment/?post=${postId}` : 'api/comment';

    try {
        const {data} = await $host.get(url);
        return data;
    } catch (e) {
        const {data} = e.response;
        return data;
    }
};

export const createComment = async (commentData) => {
    try {
        const {data} = await $authHost.post('api/comment', commentData);
        return data;
    } catch (e) {
        const {data} = e.response;
        return data;
    }
};

export const removeComment = async (commentId) => {
    try {
        const {data} = await $authHost.delete(`api/comment/${commentId}`);
        return data;
    } catch (e) {
        const {data} = e.response;
        return data;
    }
};

