import React from "react";
import { useSelector } from "react-redux";

import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector((store) => store.movie?.nowPlayingMovies);
  const popularMovies= useSelector(store => store?.movie?.popular)
  const topRatedMovies= useSelector(store => store?.movie?.topRated)
  const upcomingMovies= useSelector(store => store?.movie?.upcoming)
  const trendingMovies= useSelector(store => store?.movie?.trending)
  if (!nowPlayingMovies || !popularMovies || !topRatedMovies || !upcomingMovies ||!trendingMovies) return;
  return (
    <>
      <div className="bg-black px-8" >
        <div className="-mt-52 relative">
          <MovieList movies={nowPlayingMovies} title={"Now Playing"} />
          <MovieList movies={trendingMovies} title={"Trending"} />
          <MovieList movies={upcomingMovies} title={"Upcoming Movies"} />
          <MovieList movies={topRatedMovies} title={"Top Rated"} />
          <MovieList movies={popularMovies} title={"Popular"} />
        </div>
      </div>
    </>
  );
};

export default SecondaryContainer;
