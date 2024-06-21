import {createSlice} from "@reduxjs/toolkit";

const initialState = [];
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCart: (state, action) => {
            state.push(action.payload);
        },
        decrementQuantity: (state, action) => {
            const existingItem = state.find(item => item.productID == action.payload);
            if (existingItem) {
                existingItem.quantity = parseInt(existingItem.quantity) - 1;
            }
        },
        incrementQuantity: (state, action) => {
            const existingItem = state.find(item => item.productID == action.payload);
            if (existingItem) {
                existingItem.quantity = parseInt(existingItem.quantity) + 1;
            }
        },
        removeItem: (state, action) => {
            return state.filter(item => item.productID != action.payload);
        },
        removeAll: (state, action) => {
            return [];
        }
    }
});

export default cartSlice.reducer;
export const {
    setCart,
    decrementQuantity,
    incrementQuantity,
    removeItem,
    removeAll
} = cartSlice.actions;