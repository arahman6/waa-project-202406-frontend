import {createSlice} from "@reduxjs/toolkit";

const initialState = [];
const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProduct: (state, action) => {
            return action.payload;
        }
    }
});

export default productsSlice.reducer;
export const {
    setProduct
} = productsSlice.actions;