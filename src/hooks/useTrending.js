
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTION } from '../utils/constant'
import {addTrendingMovies } from '../utils/MoviesSlice'

export const useTrendingMovies = () => {
    const dispatch = useDispatch()
    const getTrendingMovies = async()=>{
      const response =await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', API_OPTION)
      const data = await response.json()
      dispatch(addTrendingMovies(data.results))
    }
    useEffect(()=>{
      getTrendingMovies()
    },[])
}
