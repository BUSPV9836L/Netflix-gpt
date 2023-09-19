

import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTION } from '../utils/constant'
import { addUpcomingMovies } from '../utils/MoviesSlice'

export const useUpcoming = () => {
    const dispatch = useDispatch()
    const getUpcomingMovies = async()=>{
      const response =await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTION)
      const data = await response.json()
      dispatch(addUpcomingMovies(data.results))
    }
    useEffect(()=>{
      getUpcomingMovies()
    },[])
}
