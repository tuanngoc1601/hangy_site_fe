import axios from "axios";
import jwt_decode from "jwt-decode";
import { store } from "./redux/store";

const createAxiosBaseUrl = () => {
    return axios.create({
        baseURL: process.env.REACT_APP_BACKEND_URL,
    });
}

const checkIfTokenExpired = (accessToken) => {
    const date = new Date();
    const decodeToken = jwt_decode(accessToken);
    if (decodeToken.exp < date.getTime() / 1000) {
        return true;
    }
    return false;
};

const refreshToken = async () => {
    try {
        const res = await createAxiosBaseUrl().post("/api/v1/auth/refresh", {
            withCredentials: true,
        });
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export const createAxiosClient = (stateSuccess) => {
    const instance = createAxiosBaseUrl();
    instance.interceptors.request.use(
        async (config) => {
            const user = store.getState().auth.login.currentUser;
            if (user) {
                let accessToken = user.accessToken;
                const isTokenExpired = checkIfTokenExpired(accessToken);
                if (isTokenExpired) {
                    try {
                        const data = await refreshToken();
                        console.log("1");
                        const refreshUser = {
                            ...user,
                            accessToken: data.accessToken,
                        };
                        store.dispatch(stateSuccess(refreshUser));
                        accessToken = refreshUser.accessToken;
                    } catch (error) {
                        console.error("Failed to refresh access token:", error);
                    }
                }
                config.headers["token"] = `Bearer ${accessToken}`;
            }
    
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    return instance;
}
