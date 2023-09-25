import React, { useState } from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const GptMovieSuggesation = (props) => {
  const moviesName = useSelector((store) => store?.gpt?.movieName);
  const moviesList = useSelector((store) => store?.gpt?.movieList);
  const gptSpinner = useSelector((store) => store?.gpt?.spinner);
  const getBackdropPath = (backdrop_path) => {
    let flatMovieList=[]
      for(let i=0;i<moviesList.length;i++){
          flatMovieList = [...flatMovieList,...moviesList[i]]
      }
      const popupmovie=flatMovieList.filter((movie)=>movie.backdrop_path==backdrop_path)
      props.getPopUpMovie(popupmovie[0])
  };
  const renderContent = () => {
   return !gptSpinner ? (
      <div className="mt-[10px] text-white z-20 px-8 bg-black   left-0 right-0 rounded-md">
        {moviesList.length == 10 ? (
          moviesName.map((movieName_, index) => {
            return (
              <MovieList
                title={movieName_}
                movies={moviesList[index]}
                key={index}
                getBackdropPath={getBackdropPath}
              />
            );
          })
        ) : (
          <>
            <div className=" py-12 flex justify-center">
              <p>I'm very sorry, but I can't assist with that request</p>
            </div>
          </>
        )}
      </div>
    ) : (
      <div class="flex justify-center items-center mt-10">
        <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-lime-900"></div>
      </div>
    );
  };
  if (!moviesName) return;
  return (
    renderContent()
  );
};

export default GptMovieSuggesation;
