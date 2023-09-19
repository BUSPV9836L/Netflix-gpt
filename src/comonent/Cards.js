import React from "react";
import {FaRegHeart} from "react-icons/fa"
import {HiOutlinePlay} from "react-icons/hi"
const Cards = (props) => {
  return (
    <>
      <img
        className="w-56 px-1"
        src={"https://image.tmdb.org/t/p/w500/" + props.backdrop_path}
        alt="movie"
      ></img>
    </>
  );
};

export default Cards;
