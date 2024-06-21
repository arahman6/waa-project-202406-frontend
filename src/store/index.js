import {configureStore} from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import cartSlice from "../features/cartSlice";
import usersSlice from "../features/usersSlice";
import reviewsSlice from "../features/reviewsSlice";
import productsSlice from "../features/productsSlice";
import categorySlice from "../features/categorySlice";
import ordersSlice from "../features/ordersSlice";
import spinnerSlice from "../features/spinnerSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        spinner: spinnerSlice,
        products: productsSlice,
        cart: cartSlice,
        users: usersSlice,
        reviews: reviewsSlice,
        categories: categorySlice,
        orders: ordersSlice
    }
});

export default store;