import React, { Component } from 'react';

class BookItem extends Component {

   render() {

      const { shelf, title, authors } = this.props.bookDetails;
      const { thumbnail } = this.props.bookDetails.imageLinks;

      return (
         <div className="book">
            <div className="book-top">
               <div className="book-cover" style={{ backgroundImage: `url(${thumbnail})` }}></div>
               <div className="book-shelf-changer">
                  <select value={shelf ? shelf : 'none'} onChange={event => this.props.updateBookSection(this.props.bookDetails, event.target.value)}>
                     <option value="none" disabled>Move to...</option>
                     <option value="currentlyReading">Currently Reading</option>
                     <option value="wantToRead">Want to Read</option>
                     <option value="read">Read</option>
                     <option value="none">None</option>
                  </select>
               </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">
               {authors ? authors.join(', '): ''}
            </div>
         </div>
      )
   }
}

export default BookItem;