import React from 'react'
import Header from './Header'
import GptSerachBar from './GptSearchBar'
import GptMovieSuggesation from './GptMovieSuggesation'
import { LOGIN_BACKGROUND } from '../utils/constant'
const GptSearch = () => {
  return (
    <div>
      <div className=''>
        <img className="opacity-100" src={LOGIN_BACKGROUND} alt="background" />
      </div>
        <GptSerachBar/>
        <GptMovieSuggesation/>
    </div>
  )
}

export default GptSearch