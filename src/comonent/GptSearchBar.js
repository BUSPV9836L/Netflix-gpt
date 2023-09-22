import React, { useRef, useState } from "react";
import openai from "../utils/openai";
import { API_OPTION } from "../utils/constant";
import { addSearchedMovieList } from "../utils/gptSlice";
import { useDispatch } from "react-redux";
const GptSerachBar = () => {
  const serachText = useRef();
  const dispatch = useDispatch()
  const getMoviesData = async (movie) => {
    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTION
    );
    const data = await response.json();
    return data.results
  };
  const handleGptSearchClick = async (event) => {
    event.preventDefault();
    const query =
      "Act as a Movie recomendation system and suggest some movies for query: " +
      serachText.current.value +
      "Only give me 10 Movies comma seperated like the example result given ahead. Example Result: Gadar, Sholy, Goalmall";
    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });
    
    let movies = gptResult.choices[0].message.content;
    movies = movies.split(",");
    if (!movies) return;
    const arrayPromises=movies.map((movie) =>getMoviesData(movie));
    const searchedResult = await Promise.all(arrayPromises)
    dispatch(addSearchedMovieList({movieList: searchedResult, movieName: movies}))

  };
  return (
    <div className="flex w-full justify-center mt-[200px]">
      <form className="">
        <input
          ref={serachText}
          type="text"
          className="w-[400px] px-4 py-2 bg-slate-900 rounded-md text-white "
          placeholder="What would you like to watch today?"
        ></input>
        <button
          className="text-white text-lg px-4 py-2 ml-2 rounded-md mr-4 bg-gradient-to-b from-black hover:bg-black"
          onClick={handleGptSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSerachBar;
