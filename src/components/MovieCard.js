import React, { useState, forwardRef } from 'react'
import MovieControls from './MovieControls';
import nophoto from '../images/no-photo.png';
import Tab from './Tab';


//preku type odreduvame dali ke bide vo watchlist ili watched
const MovieCard = forwardRef(({ movie, type }, ref) => {

   return (
      <>
         <div className="movie-card">

            <div className="overlay"></div>

            {movie.poster_path ?
               (
                  <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title}`} />
               ) :
               (

                  <img src={nophoto} alt={`${movie.title}`} />
               )}

            <MovieControls type={type} movie={movie} />


         </div>
         {/* <div ref={ref} >Tooltip</div> */}

      </>
   )
})

export default MovieCard
