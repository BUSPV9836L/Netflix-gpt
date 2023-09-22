import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./MoviesSlice"
import gptReducer from "./gptSlice"
import profileReducer from "./profileSlice"
const appStore= configureStore(
    {
        reducer:{
            user:userReducer,
            movie: movieReducer,
            gpt: gptReducer,
            profile: profileReducer
        }
    }
)

export default appStore;