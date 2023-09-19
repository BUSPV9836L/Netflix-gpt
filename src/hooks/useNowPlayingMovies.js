

import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTION } from '../utils/constant'
import { addNowPlayingMovies } from '../utils/MoviesSlice'

export const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
    const getNowPalyingMovie = async()=>{
      const response =await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', 
      API_OPTION)
      const data = await response.json()
      dispatch(addNowPlayingMovies(data.results))
    }
    useEffect(()=>{
      getNowPalyingMovie()
    },[])
}
