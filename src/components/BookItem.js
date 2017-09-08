import React, { Component } from 'react';

class BookItem extends Component {
   render() {
      return (
         <div className="book">
            <div className="book-top">
               <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.bookDetails.imageLinks.thumbnail})` }}></div>
               <div className="book-shelf-changer">
                  <select value={this.props.bookDetails.shelf} onChange={ event => this.props.updateBookSection(this.props.bookDetails, event.target.value)}>
                     <option value="none" disabled>Move to...</option>
                     <option value="currentlyReading">Currently Reading</option>
                     <option value="wantToRead">Want to Read</option>
                     <option value="read">Read</option>
                     <option value="none">None</option>
                  </select>
               </div>
            </div>
            <div className="book-title">{this.props.bookDetails.title}</div>
            <div className="book-authors">
               { this.props.bookDetails.authors !== undefined ? this.props.bookDetails.authors.map(author => (
                  <span key={author}>{author}</span>
               )) : null}
            </div>
         </div>
      )
   }
}

export default BookItem;