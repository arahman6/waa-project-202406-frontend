import {configureStore} from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import notificationSlice from "../features/notificationSlice";
import productSlice from "../features/productSlice";
import cartSlice from "../features/cartSlice";
import usersSlice from "../features/usersSlice";
import reviewsSlice from "../features/reviewsSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        notification: notificationSlice,
        product: productSlice,
        cart: cartSlice,
        users: usersSlice,
        reviews: reviewsSlice,
    }
});

export default store;