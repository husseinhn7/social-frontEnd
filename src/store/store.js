import { configureStore } from "@reduxjs/toolkit";
import reducer from "./testSilce"
import authReducer from "./authSlice"
import socketReducer from "./socketSlice";
import chatReducer from "./mainChatSlice"
import notificationSlice from "./notificationSlice";
export const store = configureStore({
    reducer : {
        test :reducer,
        auth :authReducer,
        socket : socketReducer,
        chat: chatReducer,
        notification : notificationSlice
    },
    middleware :getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
}) 