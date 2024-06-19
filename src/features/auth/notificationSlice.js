import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    success: false,
    failed: false,
    message: ""
};
const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        showSuccess: (state, action) => {
            state.success = true;
            state.message = action.payload.message;
        },
        hideSuccess: (state) => {
            state.success = false;
        },
        showFailed: (state, action) => {
            state.failed = true;
            state.message = action.payload.message;
        },
        hideFailed: (state) => {
            state.failed = false;
        }
    }
});

export default notificationSlice.reducer;
export const {
    showSuccess,
    hideSuccess,
    showFailed,
    hideFailed
} = notificationSlice.actions;