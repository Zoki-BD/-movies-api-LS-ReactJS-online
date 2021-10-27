import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header';
import Watchlist from './components/Watchlist';
import Watched from './components/Watched';
import Add from './components/Add';
import "./lib/font-awesome/css/all.min.css";


import { AppProvider } from './context/GlobalState'


function App() {
   return (
      <AppProvider  >

         <Router>
            <Header />

            <Switch>
               <Route exact path='/' >
                  <Watchlist />
               </Route>
               <Route path='/watched'>
                  <Watched />
               </Route>
               <Route path='/add'>
                  <Add />
               </Route>
            </Switch>
         </Router>
      </AppProvider>


   );
}

export default App;


// 38940c671b10b250dd4b31b08ddd9bd3
