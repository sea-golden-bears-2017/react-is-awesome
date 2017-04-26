import React, { Component } from 'react';

import $ from 'jquery';
import './BookList.css';

// eslint-disable-next-line react/prefer-stateless-function
class Book extends Component {


render() {
  return(

    <div className = "book-container">
      <h1 className = "book-title">{this.props.book.title}</h1>
      <div className = "book-author">
        <h2>By: {this.props.book.author}</h2>
      </div>
      <div className = "book-genre">
         <h3>{this.props.book.genre}</h3>
      </div>
      <div className = "book-publisher">
        <h3>{this.props.book.publisher}</h3>
      </div>
    </div>

  )
}

}
export default Book;
