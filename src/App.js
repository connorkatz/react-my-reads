import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookLibrary from './BookLibrary';
import './App.css';

class App extends React.Component {
   render() {
      return (
         <div className="my-reads-app">
            <Route
               exact path="/"
               render={() => (<BookLibrary/>)}
            />
            
         </div>
      )
   }
}

export default App;
