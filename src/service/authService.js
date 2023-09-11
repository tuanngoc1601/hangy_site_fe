import axios from "../axios";

export const handleLoginService = (user) =>  {
    return axios.post('/api/v1/auth/login', user);
}

export const handleRegisterService = (user) => {
    return axios.post('/api/v1/auth/sign-up', user);
}