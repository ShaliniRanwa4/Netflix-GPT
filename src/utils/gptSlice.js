import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        movieResult:null,
        movieNames:null
    },
    reducers:{
        toggleGptSearch:(state,action)=>{
            state.showGptSearch=!state.showGptSearch
        },
        addGptMoviesResult:(state,action)=>{
           const {movieNames,movieResult}=action.payload;
            state.movieNames=movieNames;
            state.movieResult=movieResult;
        }
    }
})
export const {toggleGptSearch,addGptMoviesResult}=gptSlice.actions;
export default gptSlice.reducer;