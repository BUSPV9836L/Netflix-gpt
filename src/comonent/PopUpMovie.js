import React from "react";
import {AiFillCloseCircle} from "react-icons/ai"
const PopUpMovie = (props) => {
  const movie = props.movie;
  const handelPopUp=()=>{
    props.handelPopUp()
  }
  return (
    <div className="absolute text-white w-[30%] rounded-md px-3 z-30 pt-4 mx-auto right-0 left-0 mt-[30%] bg-black  h-[100%] flex items-center flex-col opacity-90">
      <div className="flex justify-between w-full">
      <img
        className="w-[300px] px-1 pt-2"
        src={"https://image.tmdb.org/t/p/w500/" + movie.backdrop_path}
        alt="movie"
      ></img>
      <AiFillCloseCircle onClick={handelPopUp} size={20}/>
      </div>
      <div className=" w-full pt-2 justify-between">
        <h1 className="font-bold text-xl text-yellow-400">{movie.title}</h1>
        <h1 className="font-bold text-xl">
          Release Date: {movie.release_date}
        </h1>
        <h1 className="font-bold text-xl">Original Language: {movie.original_language}</h1>
        <h1 className="font-bold text-xl">Popularity : {movie.popularity}</h1>
      </div>
      <div>
        <h1 className="font-bold text-xl mt-2">Overview</h1>
      <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default PopUpMovie;
