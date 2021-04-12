import {$host, $authHost} from './index';

export const getAllComments = async (postId) => {
    const url = postId ? `api/comment/?post=${postId}` : 'api/comment';
    const {data} = await $host.get(url);
    return data;
};

