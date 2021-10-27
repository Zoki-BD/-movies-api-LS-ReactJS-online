import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'
import Modal from '../Modal'






function MovieControls({ movie, type }) {

   const [show, setShow] = useState(false)

   const { removeMovieFromWatchlist, addMovieToWatched, removeMovieFromWatched } = useContext(GlobalContext);

   return (
      <>
         <Modal show={show} close={() => setShow(false)} {...movie} />
         <div className="inner-card-controls">
            {type === 'watchlist' && (
               <>
                  <Tippy content={<span style={{ color: 'yellow' }}>send to watched</span>}>
                     <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
                        <i className="fa-fw far fa-eye"> </i>
                     </button>
                  </Tippy>


                  <Tippy arrow={false} content={<span style={{ color: 'yellow' }}>delete movie</span>}>
                     <button className="ctrl-btn" onClick={() => removeMovieFromWatchlist(movie.id)}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                     </button>
                  </Tippy>


                  <Tippy content={<span style={{ color: 'yellow' }}>details</span>}>
                     <button className='ctrl-btn' onClick={() => setShow(true)}>
                        <i className="fas fa-info-circle"></i>
                     </button>
                  </Tippy>


               </>

            )}

            {type === 'watched' && (
               <>
                  <div>

                     <Tippy content='Izbrisi go filmot'>
                        <button className="ctrl-btn" onClick={() => removeMovieFromWatched(movie.id)}>
                           <i className="fa fa-times" aria-hidden="true"></i>
                        </button>
                     </Tippy>

                     <Tippy content='Detalni informacii za filmot'>
                        <button className='ctrl-btn' onClick={() => setShow(true)}>
                           <i className="fas fa-info-circle"></i>
                        </button>
                     </Tippy>
                  </div>
               </>
            )}
         </div>


      </>
   )
}

export default MovieControls
