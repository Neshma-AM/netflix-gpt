import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upComingMovies: null,
        trailerVideo: null
    },
    reducers: {
        addNowPlayingMovies : (state, action) => {
         state.nowPlayingMovies = action.payload
        },
        addPopularMovies : (state, action) => {
            state.popularMovies = action.payload
           },
        addTopRatedMovies : (state, action) => {
            state.topRatedMovies = action.payload
           },
           addUpcomingMovies : (state, action) => {
            state.upComingMovies = action.payload
           },
        addTrailerVideo: (state, action) => {
         state.trailerVideo = action.payload
        }
    }
})

export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpcomingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;