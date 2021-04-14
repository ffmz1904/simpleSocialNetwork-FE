import {$host, $authHost} from './index';

export const registration = async (registrationData) => {
    try {
        const {data} = await $host.post('api/user/registration', registrationData);
        return data;
    } catch (e) {
        const {data} = e.response;
        return data;
    }
};

export const login = async (loginData) => {
    try {
        const {data} = await $host.post('api/user/login', loginData);
        return data;
    } catch (e) {
        const {data} = e.response;
        return data;
    }
};

export const check = async () => {
    try {
        const {data} = await $authHost.get('api/user/auth');
        return data;
    } catch (e) {
        const {data} = e.response;
        return data;
    }
};

export const getUserById = async (id) => {
    try {
        const {data} = await $host.get(`api/user/${id}`);
        return data;
    } catch (e) {
        const {data} = e.response;
        return data;
    }
};

export const getAllUsers = async (nameFilter) => {
    const url = nameFilter ? `api/user?name=${nameFilter}` : 'api/user';

    try {
        const {data} = await $host.get(url);
        return data;
    } catch (e) {
        const {data} = e.response;
        return data;
    }
};

export const subscribe = async (subscribeData) => {
    try {
        const {data} = await $authHost.post('api/user/subscribe_request', subscribeData);
        return data;
    } catch (e) {
        const {data} = e.response;
        return data;
    }
};

export const confirmSubscribing = async (confirmationData) => {
    try {
        const {data} = await $authHost.post('api/user/confirm_subscribe_request', confirmationData);
        return data;
    } catch (e) {
        const {data} = e.response;
        return data;
    }
};

export const unsubscribe = async (unsubscribeData) => {
    try {
        const {data} = await $authHost.post('api/user/unsubscribe', unsubscribeData);
        return data;
    } catch (e) {
        const {data} = e.response;
        return data;
    }
};

export const getUserFriendsData = async (id) => {
    try {
        const {data} = await $host.get(`api/user/friends/${id}`);
        return data;
    } catch (e) {
        const {data} = e.response;
        return data;
    }
};

export const updateUserData = async (update) => {
    try {
        const {data} = await $authHost.put('api/user', update);
        return data;
    } catch (e) {
        const {data} = e.response;
        return data;
    }
};
