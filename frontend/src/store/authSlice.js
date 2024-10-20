import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
        loading: false,
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
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
});
export const {login, logout, setLoading} = authSlice.actions;