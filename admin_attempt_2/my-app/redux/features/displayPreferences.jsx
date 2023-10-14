import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        currentPage:0,
        darkMode:false,
    }
}


export const preferences=createSlice({
    name:"preferences",
    initialState,
    reducers: {
        dorkModeSwitch: () =>{
            state.value.darkMode = !state.value.darkMode;
        },
        changeSection: (state, action) => {
            state.value.currentPage = action.payload;
        },
    }
})

export const { darkModeSwitch, changeSection } = preferences.actions;
export default preferences.reducer;