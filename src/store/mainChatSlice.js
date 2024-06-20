import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user      : null,
    status    : "",
    messages  : [],
    count : 0

}


const chatSlice = createSlice({
    name : "chat",
    initialState,
    reducers : {
        setMessages : (state, payload)=>{
            state.messages  = payload.payload
        },
        addMassage : (state, payload)=>{
            
            state.messages.unshift(payload.payload)
        },
        setUser   : (state, payload)=>{
            state.user = payload.payload
        },
        setStatus : () =>{
            
        },
        addOneMessage : (state, payload) =>{
            state.count+=1
        },
        resetCount : (state) =>{
            state.count ?  state.count = 0 : null
        }
        

    }
})



export default chatSlice.reducer
export const  { setMessages, setUser, addMassage, addOneMessage, resetCount  } = chatSlice.actions
