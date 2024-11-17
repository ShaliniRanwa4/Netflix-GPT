import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        trendingMovies:null,
        upcomingMovies:null,
        trailerVideo:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
          state.nowPlayingMovies=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
          },
        addTrendingNowMovies:(state,action)=>{
            state.trendingMovies=action.payload
          },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload
          },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload
        }
    }

})
export const{addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTrendingNowMovies,addUpcomingMovies} =movieSlice.actions
export default movieSlice.reducer;