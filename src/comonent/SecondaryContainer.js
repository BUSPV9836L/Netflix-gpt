import React, { useState } from "react";
import { useSelector } from "react-redux";

import MovieList from "./MovieList";

const SecondaryContainer = (props) => {
  const nowPlayingMovies = useSelector(
    (store) => store.movie?.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store?.movie?.popular);
  const topRatedMovies = useSelector((store) => store?.movie?.topRated);
  const upcomingMovies = useSelector((store) => store?.movie?.upcoming);
  const trendingMovies = useSelector((store) => store?.movie?.trending);
  const getBackdropPath = (backdrop_path) => {
    const movies=[...nowPlayingMovies,...popularMovies,...topRatedMovies,...upcomingMovies,...topRatedMovies]
      const popupmovie=movies.filter((movie)=>movie.backdrop_path==backdrop_path)
      props.getPopUpMovie(popupmovie[0])
      
  };
  if (
    !nowPlayingMovies ||
    !popularMovies ||
    !topRatedMovies ||
    !upcomingMovies ||
    !trendingMovies
  )
    return;
  return (
    <>
      <div className="bg-black px-4 sm:px-8 mt-[210px] sm:mt-0" >
        <div className="-mt-52 relative">
          <MovieList
            movies={nowPlayingMovies}
            title={"Now Playing"}
            getBackdropPath={getBackdropPath}
          />
          <MovieList
            movies={trendingMovies}
            title={"Trending"}
            getBackdropPath={getBackdropPath}
          />
          <MovieList
            movies={upcomingMovies}
            title={"Upcoming Movies"}
            getBackdropPath={getBackdropPath}
          />
          <MovieList
            movies={topRatedMovies}
            title={"Top Rated"}
            getBackdropPath={getBackdropPath}
          />
          <MovieList
            movies={popularMovies}
            title={"Popular"}
            getBackdropPath={getBackdropPath}
          />
        </div>
      </div>
    </>
  );
};

export default SecondaryContainer;
