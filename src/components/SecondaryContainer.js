import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movie.nowPlayingMovies)
  const popularMovies = useSelector(store => store.movie.popularMovies)
  const topRatedMovies = useSelector(store => store.movie.topRatedMovies)
  const upComingMovies = useSelector(store => store.movie.upComingMovies)
  return (
     movies && (
    <div className="bg-black">
      
      {/* MovieList - Popular
         MovieCard*n
      MovieList - NowPlaying
         MovieCard*n
      MovieList - Trending
        MovieCard*n
      MovieList - Horror
        MovieCard*n */}
       <div className='-mt-60 pl-12 pt-10 relative z-20'>
       <MovieList title={"Now Playing"} movies={movies}/>
       <MovieList title={"Top Rated"} movies={topRatedMovies}/>
       <MovieList title={"Popular"} movies={popularMovies}/>
       <MovieList title={"Upcoming movies"} movies={upComingMovies}/>
       <MovieList title={"Horror"} movies={movies}/> 
       </div>  
    </div>
  )
  )
}

export default SecondaryContainer