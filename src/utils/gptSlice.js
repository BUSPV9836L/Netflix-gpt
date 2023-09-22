import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieList: null,
    movieName: null
  },
  reducers: {
    toggleGptSearch: (state)=>{
      state.showGptSearch=!state.showGptSearch
    },
    addSearchedMovieList:(state,action) =>{
         const {movieList,movieName} = action.payload
         state.movieList = movieList
         state.movieName = movieName
    }
  }
});

export const {toggleGptSearch, addSearchedMovieList} = gptSlice.actions;
export default gptSlice.reducer;
