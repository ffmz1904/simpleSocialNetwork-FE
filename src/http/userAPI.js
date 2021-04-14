import {$host, $authHost} from './index';

export const registration = async (registrationData) => {
    const {data} = await $host.post('api/user/registration', registrationData);
    return data;
};

export const login = async (loginData) => {
    const {data} = await $host.post('api/user/login', loginData);
    return data;
};

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth');
    return data;
};

export const getUserById = async (id) => {
    const {data} = await $host.get(`api/user/${id}`);
    return data;
};

export const getAllUsers = async (nameFilter) => {
    const url = nameFilter ? `api/user?name=${nameFilter}` : 'api/user';
    const {data} = await $host.get(url);
    return data;
};

export const subscribe = async (subscribeData) => {
    const {data} = await $authHost.post('api/user/subscribe_request', subscribeData);
    return data;
};

export const confirmSubscribing = async (confirmationData) => {
    const {data} = await $authHost.post('api/user/confirm_subscribe_request', confirmationData);
    return data;
};

export const unsubscribe = async (unsubscribeData) => {
    const {data} = await $authHost.post('api/user/unsubscribe', unsubscribeData);
    return data;
};

export const getUserFriendsData = async (id) => {
    const {data} = await $host.get(`api/user/friends/${id}`);
    return data;
};
