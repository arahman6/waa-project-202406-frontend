import {createSlice} from "@reduxjs/toolkit";

const initialState = [];
const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setCategory: (state, action) => {
            return action.payload;
        }
    }
});

export default categorySlice.reducer;
export const {
    setCategory
} = categorySlice.actions;