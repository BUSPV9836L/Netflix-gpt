import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieList: null,
    movieName: null,
    spinner: false
  },
  reducers: {
    toggleGptSearch: (state)=>{
      state.showGptSearch=!state.showGptSearch
    },
    toggleGptSpinner: (state)=>{
      state.spinner=!state.spinner
    },
    addSearchedMovieList:(state,action) =>{
         const {movieList,movieName} = action.payload
         state.movieList = movieList
         state.movieName = movieName
    }
  }
});

export const {toggleGptSearch, addSearchedMovieList,toggleGptSpinner} = gptSlice.actions;
export default gptSlice.reducer;
