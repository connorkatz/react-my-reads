import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI'
import BookItem from './BookItem';

class BookSearch extends Component {
   state = {
      searchString: '',
      bookResults: []
   }

   setSearchValue = searchString => {
      this.setState({ searchString });
      this.searchBooks(searchString)
   }

   searchBooks = searchString => {
      if (searchString.length) {
         BooksAPI.search(searchString).then(data => {
            if (data.error) {
               this.setState({ bookResults: [] })
            } else {
               this.setState({ bookResults: data })
            }
         })
      } else {
         this.setState({ bookResults: [] });
      }
   }

   render() {
      return (
         <div className="search-books">
            <div className="search-books-bar">
               <Link
                  className="close-search"
                  to="/"
               >Close</Link>
               <div className="search-books-input-wrapper">
                  <input type="text" value={this.state.query} placeholder="Search by title or author" onChange={event => this.setSearchValue(event.target.value)} />
               </div>
            </div>
            <div className="search-books-results">
               <ol className="books-grid">
                  {this.state.bookResults.map(book => (
                     <li key={book.id}>
                        <BookItem
                           bookDetails={book}
                           updateBookSection={this.props.updateBookSection}
                        />
                     </li>
                  ))}
               </ol>
            </div>
         </div>
      )
   }
}

export default BookSearch;