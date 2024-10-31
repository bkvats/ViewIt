import { createSlice } from "@reduxjs/toolkit";
export const loadingSlice = createSlice({
    name: "loading",
    initialState: {
        loading: false,
        message: ""
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setLoadingMessage: (state, action) => {
            state.message = action.payload;
        }
    }
});
export const {setLoading, setLoadingMessage} = loadingSlice.actions;