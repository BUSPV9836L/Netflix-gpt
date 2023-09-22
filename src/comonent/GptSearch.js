import React from "react";
import GptSerachBar from "./GptSearchBar";
import GptMovieSuggesation from "./GptMovieSuggesation";
import Header from "./Header";
const GptSearch = () => {
  return (
    <div className=" h-[100%] bg-gradient-to-b from-sky-950 absolute w-full">
      <Header />
      <GptSerachBar/>
      <GptMovieSuggesation />
    </div>
  );
};

export default GptSearch;
