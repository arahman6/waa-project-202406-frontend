import {configureStore} from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import notificationSlice from "../features/notificationSlice";
import cartSlice from "../features/cartSlice";
import usersSlice from "../features/usersSlice";
import reviewsSlice from "../features/reviewsSlice";
import productsSlice from "../features/productsSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        notification: notificationSlice,
        products: productsSlice,
        cart: cartSlice,
        users: usersSlice,
        reviews: reviewsSlice,
    }
});

export default store;