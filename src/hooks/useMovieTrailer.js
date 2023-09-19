import { useDispatch } from "react-redux";
import { API_OPTION } from '../utils/constant';
import { json } from "react-router-dom";
import { useEffect } from "react";
import { addMovieTrailer } from "../utils/MoviesSlice";

export const useMovieTrailer = (props) => {
 const dispatch = useDispatch();
 const getMovieVideos = async ()=>{
    const response = await fetch(`https://api.themoviedb.org/3/movie/${props}/videos?language=en-US`, API_OPTION)
    const data = await response.json();
    if(!data)return;
    const filterData = data.results.filter((video) => video.type === "Trailer");
    if(!filterData)return;
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addMovieTrailer(trailer))
 }
 useEffect(()=>{
    getMovieVideos();
 },[])
}
