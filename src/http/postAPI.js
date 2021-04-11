import {$host, $authHost} from './index';

export const getAllPosts = async (id) => {
    const url = id ? `api/post/?id=${id}` : 'api/post';
    const {data} = await $host.get(url);
    return data;
};

