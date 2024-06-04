import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value : 12
}



export const test = createSlice({
    name : "test",
    initialState,
    reducers : {
        add : (state) => {
            state.value+=1
        },
        min : (state) =>{
            state.value-=1
        }
    }
    

})

export const  { add , min } = test.actions
export default test.reducer