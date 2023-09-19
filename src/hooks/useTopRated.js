

import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTION } from '../utils/constant'
import { addTopRatedMovies } from '../utils/MoviesSlice'

export const useTopRatedMovies = () => {
    const dispatch = useDispatch()
    const getTopRatedMovies = async()=>{
      const response =await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTION)
      const data = await response.json()
      dispatch(addTopRatedMovies(data.results))
    }
    useEffect(()=>{
      getTopRatedMovies()
    },[])
}
