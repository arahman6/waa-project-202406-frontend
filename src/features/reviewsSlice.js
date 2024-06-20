import {createSlice} from "@reduxjs/toolkit";

const initialState = [];
const reviewsSlice = createSlice({
    name: "reviews",
    initialState,
    reducers: {
        setReviews: (state, action) => {
            return action.payload;
        },
        deleteReview: (state, action) => {
            return state.filter(item => item.id != action.payload);
        }
    }
});

export default reviewsSlice.reducer;
export const {
    setReviews,
    deleteReview
} = reviewsSlice.actions;