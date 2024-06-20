import { createSlice } from "@reduxjs/toolkit";
import getNotificationsApi from "../api/notificationApi";

const initialState = {
    notifications : [],
    count : 0
}


const notificationSlice = createSlice({
    name : "notification",
    initialState,
    reducers : {
        addNotification : (state, payload) =>{
            state.notifications.unshift(payload.payload)
        }, 
        getNotifications :(state, payload) =>{
            state.notifications = payload.payload
        },
        addOne : (state, payload) =>{
            state.count+=1
        },
        resetCount : (state) =>{
            state.count ?  state.count = 0 : null
        }
    }
})



export default notificationSlice.reducer
export const {addNotification, getNotifications, addOne, resetCount} = notificationSlice.actions