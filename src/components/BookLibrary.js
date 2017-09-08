import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookLibrarySection from './BookLibrarySection';

class BookLibrary extends Component {

   render() {
      return (
         <div className="list-books">
            <div className="list-books-title">
               <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
               <BookLibrarySection 
                  title="Currently Reading" 
                  books={this.props.books.filter(book => book.shelf === 'currentlyReading')}
                  updateBookSection={this.props.updateBookSection}
               />
               <BookLibrarySection 
                  title="Want to Read" 
                  books={this.props.books.filter(book => book.shelf === 'wantToRead')}
                  updateBookSection={this.props.updateBookSection}
               />
               <BookLibrarySection 
                  title="Read" 
                  books={this.props.books.filter(book => book.shelf === 'read')}
                  updateBookSection={this.props.updateBookSection}
               />
            </div>
            <div className="open-search">
               <Link to="/search">Add a book</Link>
            </div>
         </div>
      )
   }
}

export default BookLibrary;