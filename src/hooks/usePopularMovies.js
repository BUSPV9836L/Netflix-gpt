
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTION } from '../utils/constant'
import { addPopularMovies } from '../utils/MoviesSlice'

export const usePopularMovies = () => {
    const dispatch = useDispatch()
    const getPopularMovies = async()=>{
      const response =await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTION)
      const data = await response.json()
      dispatch(addPopularMovies(data.results))
    }
    useEffect(()=>{
      getPopularMovies()
    },[])
}
