import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        login: {
            currentUser: null,
            pennding: false,
            error: false
        },
        register: {
            pennding: false,
            error: false,
            success: false
        }
    },
    reducers: {
        loginStart: (state) => {
            state.login.pennding = true;
        },
        loginSuccess: (state, action) => {
            state.login.pennding = false;
            state.login.currentUser = action.payload;
            state.login.error = false;
        },
        loginFailed: (state) => {
            state.login.pennding = false;
            state.login.error = true;
        },
        registerStart: (state) => {
            state.register.pennding = true;
        },
        registerSuccess: (state) => {
            state.register.pennding = false;
            state.register.error = false;
            state.register.success = true;
        },
        registerFailed: (state) => {
            state.login.pennding = false;
            state.login.error = true;
            state.register.success = false;
        }
    }
})

export const {
    loginStart,
    loginSuccess,
    loginFailed,
    registerStart,
    registerSuccess,
    registerFailed
} = authSlice.actions;

export default authSlice.reducer;