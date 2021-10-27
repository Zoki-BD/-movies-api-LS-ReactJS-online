import React, { useContext, useState, forwardRef } from 'react'
import { GlobalContext } from '../context/GlobalState';
import MovieCard from './MovieCard';
import Pagination from './Pagination';
import Tab from './Tab';


function Watchlist() {

   const { watchlist } = useContext(GlobalContext);






   return (
      <div className="movie-page">
         <div className="container">
            <div className="header">
               <h1 className="heading">My Watchlist</h1>
            </div>

            {/* <Tab active={1}>
               {
                  watchlist.map((tab) => <Tab.TabPanel key={tab.id} tab={tab.title}>
                     {tab.overview} </Tab.TabPanel>)
               }
            </Tab> */}



            {watchlist.length > 0 ? (
               <div className="movie-grid">
                  {watchlist.map(movie => {
                     return (
                        <MovieCard key={movie.id} movie={movie} type='watchlist' />
                        //prakjame type 
                     )
                  })}
               </div>

            ) : <h2 className="no-movies">No movies in your list</h2>
            }
         </div>
      </div>
   )
}

export default Watchlist
