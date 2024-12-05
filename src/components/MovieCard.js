import React from 'react'
import { TMDB_IMG_CDN } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-48 pr-4'>
        <img alt='Movie logo' src={TMDB_IMG_CDN+ posterPath}/> 
      
    </div>
  )
}

export default MovieCard
