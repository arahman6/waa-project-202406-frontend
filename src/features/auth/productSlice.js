import {createSlice} from "@reduxjs/toolkit";

const initialState = {};
const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.products = action.payload;
        }
    }
});

export default productSlice.reducer;
export const {
    setProduct
} = productSlice.actions;