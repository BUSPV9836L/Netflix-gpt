import Header from "./Header";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { usePopularMovies } from "../hooks/usePopularMovies";
import { useTopRatedMovies } from "../hooks/useTopRated";
import { useUpcoming } from "../hooks/useUpcoming";
import { useTrendingMovies } from "../hooks/useTrending";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
import Profile from "./Profile"
import { useState } from "react";
import PopUpMovie from "./PopUpMovie";

const Browse = () => {
  const [movie,setMovie] =useState(null)
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcoming();
  useTrendingMovies();
  const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch);
  const showProfilePage = useSelector((store) => store?.profile?.showProfilePage);
  const renderContent = ()=>{
    if(showGptSearch){
      return <GptSearch/>
    }
    else if(showProfilePage){
      return <Profile/>
    }
    else{
      return (
        <>
        {movie?<PopUpMovie movie={movie} handelPopUp={handelPopUp}/>:""}
        <MainContainer movie ={movie} handelPopUp={handelPopUp}/>
        <SecondaryContainer getPopUpMovie={getPopUpMovie}/>
        
        </>
      )
    }
  }
  const getPopUpMovie =(movie)=>{
   setMovie(movie)
  }
  const handelPopUp =()=>{
    setMovie(null)
  }
  return (
    <div>
      <Header/>
     {renderContent()}
    </div>
  );
};

export default Browse;
