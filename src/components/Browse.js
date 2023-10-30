import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'


const Browse = () => {
 useNowPlayingMovies()
  return (
    <div>
       <Header/>
       {/*
       -MainContainer
      -Video background
      -Video title

       SecondaryContainer
       -MovieLists * n
         -cards*n
        */}

        <MainContainer/>
        <SecondaryContainer/>
    </div>
  )
}

export default Browse