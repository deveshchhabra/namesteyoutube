import { createSlice } from "@reduxjs/toolkit"


const appSlice=createSlice({
    name:"app",
    intialState:{
        isMenueOpen:true,
    },
    reducers:{
        toggleMenue:(state)=>{
            state.isMenueOpen=!state.isMenueOpen;
        },

    },
});
export const {toggleMenue}=appSlice.actions;
export default appSlice.reducer;