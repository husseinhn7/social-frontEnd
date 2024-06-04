import { configureStore } from "@reduxjs/toolkit";
import reducer from "./testSilce"
import authReducer from "./authSlice"
export const store = configureStore({
    reducer : {
        test :reducer,
        auth :authReducer

    }
}) 