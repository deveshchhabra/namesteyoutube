import { createSlice } from "@reduxjs/toolkit"
const navSlice=createSlice({
    name:"app",
    initialState:{
        isMenueOpen:true,

    },
    reducers:{
        toggleMenue:(state)=>{
            state.isMenueOpen=!state.isMenueOpen;
        }
    }
})
export const {toggleMenue}=appSlice.actions;
export default navSlice.reducer;