import React, { useRef } from "react";
import Cards from "./Cards";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

const MovieList = (props) => {
  const scrollContainerRef = useRef(null);
  const movies = props.movies;

  if (!movies) return;

  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;

    if (!container) return;

    const scrollAmount = 200;
    const currentScroll = container.scrollLeft;

    if (direction === "left") {
      container.scrollLeft = currentScroll - scrollAmount;
    } else if (direction === "right") {
      container.scrollLeft = currentScroll + scrollAmount;
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-white text-xl p-2 ">{props.title}</h1>
        <AiFillLeftCircle
          className="absolute mt-10 ml-4 cursor-pointer"
          size={50}
          color="white"
          onClick={() => handleScroll("left")}
        />
        <div className="flex w-full overflow-x-scroll" ref={scrollContainerRef}>
          {movies.map((movie) => {
            return (
              <Cards
                getBackdropPath={props.getBackdropPath}
                backdrop_path={movie.backdrop_path}
                key={movie.backdrop_path}
                id={movie.id}
              />
            );
          })}
        </div>
        <AiFillRightCircle
          className="absolute right-0 mr-12 -mt-24 cursor-pointer"
          size={50}
          color="white"
          onClick={() => handleScroll("right")}
        />
      </div>
    </div>
  );
};

export default MovieList;
