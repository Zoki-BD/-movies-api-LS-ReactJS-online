import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import MovieCard from './MovieCard';



function Watched() {

   const { watched } = useContext(GlobalContext);

   return (
      <div className="movie-page">
         <div className="container">
            <div className="header">
               <h1 className="heading">Watched Movies</h1>
            </div>


            {watched.length > 0 ? (
               <div className="movie-grid">
                  {watched.map(movie => {
                     return (
                        <MovieCard key={movie.id} movie={movie} type='watched' /> //prakjame type 
                     )
                  })}
               </div>
            ) : <h2 className="no-movies">No movies in your list</h2>}



         </div>
      </div>
   )
}

export default Watched
