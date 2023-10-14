import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import prefrencesReducer from "@/redux/features/displayPreferences";
import userDataReducer from "@/redux/features/userData";

export const store =configureStore({
    reducer: {
        prefrencesReducer,
        userDataReducer
    }
})

export const useAppSelector = useSelector;