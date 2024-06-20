import { createSlice } from "@reduxjs/toolkit";
import io from "socket.io-client"



const initialState = {
    socket : io("ws://localhost:4000", {autoConnect:false})
}

initialState.socket.on("p", (message)=>{
    console.log(message)
})
const socket = createSlice({
    name : "socket",
    initialState,
    reducers : {
        connect : (state, payload) =>{
            state.socket.connect()
            console.log(state.socket.active)
            state.socket.emit("setSocketId", payload.payload)
            state.socket.on("p", (message)=>{
                console.log(message)
            })
        }, 
        setSocketId : (state, payload) =>{
            state.socket.emit("setSocketId", payload.payload)
            console.log(state.socket.active)
        }, 
        sendMessage : (state, payload) =>{
            const {id, m} = payload.payload
            state.socket.emit("message" ,{id,m})
        }, 
        

    }
})


export default socket.reducer
export const {connect, sendMessage, setSocketId} = socket.actions