import { createSlice } from "@reduxjs/toolkit";


const profileSlice = createSlice({
  name: "Profile",
  initialState: {
    showProfilePage: false
  },
  reducers: {
    toggleProfilePage: (state)=>{
      state.showProfilePage=!state.showProfilePage
    }
  }
});

export const {toggleProfilePage, } = profileSlice.actions;
export default profileSlice.reducer;
