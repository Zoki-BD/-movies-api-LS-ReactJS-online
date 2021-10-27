import React, { useState } from 'react'
import ResultCard from './ResultCard';
import Pagination from './Pagination'
import '../App.css';





function Add() {


   const [query, setQuery] = useState('');
   const [results, setResults] = useState([]);



   //ovie dva state-a se za da moze da pravime pagination. 
   const [currentPage, setCurrentPage] = useState(1) //stranicata na koja sme momentalno pri prelistuvanjeto.
   const [moviesPerPage, setMoviesPerPage] = useState(3) //kolku da pokazuva postovi na edna stranica prelistuvanje.


   const onChange = (e) => {
      e.preventDefault();

      setQuery(e.target.value)

      fetch(`https://api.themoviedb.org/3/search/movie?api_key=38940c671b10b250dd4b31b08ddd9bd3&language=en-US&&include_adult=false&query=${e.target.value}`)
         .then(res => res.json())
         .then(data => {
            if (!data.errors) {
               setResults(data.results)
            } else {
               setResults([])
            }
         });
   }


   const indexOfLastPost = currentPage * moviesPerPage; //momental.page e primer 4-tata i sega 4 x 10 = 40 sto e index sto na prviot post na toj page
   const indexOfFirstPost = indexOfLastPost - moviesPerPage;
   const currentMovies = results.slice(indexOfFirstPost, indexOfLastPost);


   //Change page on klik
   const paginate = (brojNaPage) => {
      setCurrentPage(brojNaPage);
   }



   return (
      <div className="add-page" >
         <div className="container">
            <div className="add-content">
               <div className="input-wrapper">
                  <input type='text' placeholder="Search for movie"
                     value={query}
                     onChange={onChange} />
               </div>

               <ResultCard movies={currentMovies} />



               <Pagination moviesPerPage={moviesPerPage} totalMovies={results.length} paginate={paginate} setCurrentPage={setCurrentPage} />
            </div>
         </div>
      </div>
   )
}

export default Add
