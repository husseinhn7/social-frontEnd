import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage } from "../util/localStorage";

const initialState = {
    user : getLocalStorage("user"),
    token : getLocalStorage("token")
}


const auth = createSlice({
    name : "auth",
    initialState,
    reducers : {
        setCredentials: (state, payload) =>{
            state.user = payload.payload.user
            state.token = payload.payload.token
            console.log(initialState, payload.payload)
        },
        logout : (state, payload) =>{
            state.user = null
            state.token = null
        },

    }
})

export default auth.reducer
export const {setCredentials , logout } = auth.actions