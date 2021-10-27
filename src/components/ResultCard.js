import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';


function ResultCard({ movies }) {

   console.log(movies)
   const { addMovieToWatchlist, disableMovieIfWatched, watchlist, watched } = useContext(GlobalContext)




   return (
      <div>
         {
            movies.length > 0 && (
               <ul className="results">

                  {movies.map((movie) => (

                     <li li key={movie.id} >
                        <div className="result-card">
                           <div className="poster-wrapper">
                              {movie.poster_path ?
                                 (
                                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title}`} />
                                 ) :
                                 (
                                    <div className="filler-poster">       </div>
                                 )
                              }
                           </div>
                           <div className="info">
                              <div className="header">
                                 <h3 className="title"> {movie.title}   </h3>

                                 <h4 className='release-date'>
                                    {/*check dali ima vo api toj film release date, i substring za da dade samo godina a ne cel datum */}
                                    {movie.release_date ? movie.release_date.substring(0, 4) : ''}
                                 </h4>

                                 <div className="controls">
                                    <button className="btn"
                                       onClick={() => addMovieToWatchlist(movie)}
                                       disabled={disableMovieIfWatched(movie)}>

                                       Add to watchlist
                                    </button>
                                 </div>
                              </div>
                           </div>



                        </div>

                     </li>
                  ))}

               </ul>

            )
         }


      </div >
   )
}





export default ResultCard
