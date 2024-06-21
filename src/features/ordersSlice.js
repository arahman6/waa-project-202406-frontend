import {createSlice} from "@reduxjs/toolkit";

const initialState = [];
const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        setOrder: (state, action) => {
            return action.payload;
        }
    }
});

export default ordersSlice.reducer;
export const {
    setOrder
} = ordersSlice.actions;