import { createSlice } from "@reduxjs/toolkit";
export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
        authLoading: false,
        userData: {}
    },
    reducers: {
        login: (state, action) => {
            state.userData = action.payload;
            state.isLoggedIn = true;
        },
        logout: (state, action) => {
            state.userData = {};
            state.isLoggedIn = false;
        },
        setAuthLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
});
export const {login, logout, setAuthLoading} = authSlice.actions;