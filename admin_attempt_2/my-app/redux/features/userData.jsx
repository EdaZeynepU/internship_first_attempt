import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        data:{},
        isDone:false
    }
}


export const preferences=createSlice({
    name:"userData",
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.value.data = action.payload;
            state.value.isDone = true;
          },
    }
})

export const { setUserData } = preferences.actions;
export default preferences.reducer;