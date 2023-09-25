import React from "react";
import GptSerachBar from "./GptSearchBar";
import GptMovieSuggesation from "./GptMovieSuggesation";
import Header from "./Header";
import PopUpMovie from "./PopUpMovie";
const GptSearch = (props) => {
  return (
    <div className=" h-[100%] bg-black absolute w-full">
      {props.movie?<PopUpMovie movie={props.movie} handelPopUp={props.handelPopUp}/>:""}
      <GptSerachBar/>
      <GptMovieSuggesation getPopUpMovie={props.getPopUpMovie}/>
    </div>
  );
};

export default GptSearch;
