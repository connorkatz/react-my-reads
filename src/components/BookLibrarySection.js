import React, { Component } from 'react';
import BookItem from './BookItem';

class BookLibrarySection extends Component {
   render() {
      return (
         <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
               <ol className="books-grid">
                  {this.props.books.map(book => (
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

export default BookLibrarySection;