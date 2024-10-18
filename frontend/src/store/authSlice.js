import { createSlice } from "@reduxjs/toolkit";
export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
        loading: true,
        userData: {}
    },
    reducers: {
        login: async (state, action) => {
            state.loading = true;
            if (!isLoggedIn) {
                const response = await axios("/api/v1/users/get-current-user");
                if (response.ok) {
                    state.userData = response.data.data;
                    state.isLoggedIn = true;
                }
                state.loading = false;
            }
        },
        logout: async (state, action) => {
            state.loading = true;
            if (isLoggedIn) {
                const respone = await axios("/api/v1/users/logout");
                if (response.ok) {
                    state.userData = {};
                    state.isLoggedIn = false;
                }
            }
            state.loading = false;
        }
    }
});
export const {login, logout} = authSlice.actions;