import {configureStore} from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import notificationSlice from "../features/auth/notificationSlice";
import productSlice from "../features/auth/productSlice";
import cartSlice from "../features/auth/cartSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        notification: notificationSlice,
        product: productSlice,
        cart: cartSlice,
    }
});

export default store;