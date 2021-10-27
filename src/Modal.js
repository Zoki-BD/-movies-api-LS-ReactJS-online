import React from 'react'
//import { useParams, Link } from 'react-router-dom'
import ReactDom from 'react-dom'




function Modal({ close, show, vote_average, overview, title, poster_path }) {


   console.log(title)



   return ReactDom.createPortal(
      <div className={`modal ${show ? 'show' : ''}`} onClick={close} >
         <div className='modal-content' onClick={e => e.stopPropagation()}>

            <div className='modal-header'>


            </div>
            <div className='modal-body'>
               <h2 className='section-title'>{title}</h2>

               <div className='drink'>

                  <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title}></img>
                  <div className='drink-info'>
                     <p>
                        <span className='drink-data'><i className="far fa-lightbulb"></i> :</span> {title}
                     </p>
                     <p>
                        <span className='drink-data'><i className="fas fa-info-circle"></i> :</span> {overview}
                     </p>
                     <p>
                        <span className='drink-data'><i className="fas fa-graduation-cap"></i>:</span> <b>{vote_average} </b>     avearge grade
                     </p>

                  </div>
               </div>

            </div>
            <div className='modal-footer'>
               <button className='btn btn-danger' onClick={close}>Close </button>
            </div>
         </div>
      </div>,
      document.getElementById('portalZaModalot')

   )
}


export default Modal
