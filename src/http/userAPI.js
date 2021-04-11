import {$host, $authHost} from './index';

export const registration = async (registrationData) => {
    const {data} = await $host.post('api/user/registration', registrationData);
    return data;
}

export const login = async (loginData) => {
    const {data} = await $host.post('api/user/login', loginData);
    return data;
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth');
    return data;
}
