import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_NETFLIX } from '../utils/constant'

const GptSearch = () => {
  return (
    <div>
        <div className="fixed -z-10">
        <img
          src={BG_NETFLIX}
          alt="logo"
        />
      </div>
    <GptSearchBar></GptSearchBar>
    <GptMovieSuggestion></GptMovieSuggestion>
    </div>
  )
}

export default GptSearch
