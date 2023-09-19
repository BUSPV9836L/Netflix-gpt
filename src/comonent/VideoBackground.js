import React from "react";
import { useSelector } from "react-redux";
import { useMovieTrailer } from "../hooks/useMovieTrailer";

const VideoBackground = (props) => {
  useMovieTrailer(props.id);
  const trailer = useSelector((store) => store.movie?.trailer);
  return (
    <div className="w-screen">
      <iframe className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailer?.key +
          "?rel=0&autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
