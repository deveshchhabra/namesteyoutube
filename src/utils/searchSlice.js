import { createSlice } from "@reduxjs/toolkit"
import appSlice from "./appSlice";


const searchSlice=createSlice({
    name:'search',
    initialState:{},
    reducers:{
        cacheResults:(state,action)=>{
            Object.assign(state,action.payload)
        }   }
})

export const {cacheResults}=searchSlice.actions;
export default searchSlice.reducer;