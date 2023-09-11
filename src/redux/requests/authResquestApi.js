import { loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess } from "../authSlice";
import { authService } from "../../service";

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await authService.handleLoginService(user);
        dispatch(loginSuccess(res.data.data));
        navigate("/");
    } catch (err) {
        dispatch(loginFailed());
    }
}

export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try {
        await authService.handleRegisterService(user);
        dispatch(registerSuccess());
        navigate("/login");
    } catch (err) {
        dispatch(registerFailed());
    }
}