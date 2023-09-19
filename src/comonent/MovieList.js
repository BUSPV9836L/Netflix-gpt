import React from "react";
import Cards from "./Cards";
const MovieList = (props) => {
    const movies=props.movies
    if(!movies)return;
  return (
    <div>
      <div>
        <h1 className="text-white text-xl p-2 ">{props.title}</h1>
        <div className="flex  w-full overflow-x-scroll">
          {movies.map((movie) => {
            return (
              <Cards
                backdrop_path={movie.backdrop_path}
                key={movie.backdrop_path}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
