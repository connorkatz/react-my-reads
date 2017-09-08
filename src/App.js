import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookLibrary from './components/BookLibrary';
import BookSearch from './components/BookSearch';
import './App.css';


class App extends React.Component {

   state = {
      books: []
   }

   componentDidMount() {
      BooksAPI.getAll().then(books => {
         this.setState({ books });
      });
   }

   updateBookSection = (book, bookSection) => {
      book.shelf = bookSection;
      this.setState(state => ({
         books: state.books.filter(b => b.id !== book.id).concat([book])
      }));
   }

   render() {
      return (
         <div className="my-reads-app">
            <Route
               exact path="/"
               render={() => (<BookLibrary books={this.state.books} updateBookSection={this.updateBookSection} />)}
            />
            <Route
               path="/search"
               render={() => (<BookSearch updateBookSection={this.updateBookSection} />)}
            />
         </div>
      )
   }
}

export default App;
