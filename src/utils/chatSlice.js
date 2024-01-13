import {createSlice} from "@reduxjs/toolkit"
import { offsetLIVE } from "./contants";
const chatSlice =createSlice({
    name:"chat",
    initialState:{
        message:[]
    },
    reducers:{
       addMessage:(state,action)=>{
        state.message.splice(offsetLIVE,1)
        // if(state.message.length)
        state.message.unshift(action.payload);
       },
    },

})
export const {addMessage}=chatSlice.actions;
export default chatSlice.reducer;