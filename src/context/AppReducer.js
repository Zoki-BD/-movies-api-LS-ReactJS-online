export default (state, action) => {

   switch (action.type) {

      case 'ADD_MOVIE_TO_WATCHLIST':
         // return { ...state, watchlist: action.payload } vak nema da raboti dobro
         return { ...state, watchlist: [action.payload, ...state.watchlist] }


      case 'ADD_MOVIE_TO_WATCHED':
         return {
            ...state,


            watchlist: state.watchlist.filter(movie => movie.id !== action.payload.id),

            //a ova e da se prenese vo watched arrayot i na page-ot
            watched: [action.payload, ...state.watched]
         }



      case "REMOVE_MOVIE_FROM_WATCHLIST":
         return {
            ...state,
            watchlist: state.watchlist.filter(movie => movie.id !== action.payload)

         }


      case "REMOVE_MOVIE_FROM_WATCHED":
         return {
            ...state,
            watched: state.watched.filter(movie => movie.id !== action.payload)

         }
      default:
         return state;

   }
}