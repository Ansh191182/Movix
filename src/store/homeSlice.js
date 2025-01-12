import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
   name: 'home',
   initialState:{
    url:{},
    genres: {}
   },

   reducers:{
    getApiConfiguration: (state, action)=>{
       state.url = action.payload;
    },
    getGeners: (state , action) =>{
       state.genres = action.payload;
    }
   },

})
export const homeActions = homeSlice.actions;
export default homeSlice;