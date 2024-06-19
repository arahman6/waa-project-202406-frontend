import {configureStore} from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import notificationSlice from "../features/auth/notificationSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        notification: notificationSlice,
    }
});

export default store;