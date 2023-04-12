import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
    name:"categories",
    initialState: {
        selectedCategory: "ALL"
    },

    reducers: {
        selectCategory:(state,action) => {
            state.selectedCategory = action.payload;
        }
    }
})

export const getSelectedCategory = state => state.categories.selectedCategory;
export const { selectCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;