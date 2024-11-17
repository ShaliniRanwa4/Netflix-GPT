import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
 const movies= useSelector((store)=>store.movies)
  return (
    <div className=' bg-black'>
      <div className='-mt-72 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
      <MovieList title={"Top Rated"} movies={movies.trendingMovies}/>
      
      

      </div>
    </div>
  )
}

export default SecondaryContainer
