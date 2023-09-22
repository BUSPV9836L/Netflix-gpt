import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = (props) => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  if (!movies) return;
  const nowPlayingMovie = movies[Math.floor(Math.random() * movies.length)];
  const { overview, title,id } = props.movie?props.movie:nowPlayingMovie;

  return (
    <div className=" w-screen" onClick={props.handelPopUp}>
      <VideoTitle overview={overview} title={title} />
      <VideoBackground id={id}/>
    </div>
  );
};

export default MainContainer;
