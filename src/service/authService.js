import axios from "axios";
import { createAxiosClient } from "../axios";
import { logoutSuccess } from "../redux/authSlice";

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    // withCredentials: true
});

const axiosClientLogout = createAxiosClient(logoutSuccess);

export const handleLoginService = (user) =>  {
    return axiosClient.post('/api/v1/auth/login', user);
}

export const handleRegisterService = (user) => {
    return axiosClient.post('/api/v1/auth/sign-up', user);
}

export const handleLogoutService = () => {
    return axiosClientLogout.post('/api/v1/auth/logout');
}