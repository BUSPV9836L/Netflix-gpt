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
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcoming();
  useTrendingMovies();
  const nagivate = useNavigate()
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
        <MainContainer/>
        <SecondaryContainer/>
        </>
      )
    }
  }
  return (
    <div>
      <Header/>
     {renderContent()}
    </div>
  );
};

export default Browse;
