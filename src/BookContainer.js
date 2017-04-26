import React, { Component } from 'react';
import Book from './Book';
import $ from 'jquery';

// import BookItem from './BookItem';

class BookContainer extends Component {
  constructor() {
    super();
    this.state = {
      allBooks: []
    };
    $.ajax({
      url: 'http://localhost:3000/books/',
      crossDomain: true,
      xhrFields: { withCredentials: true},
    }).done(response => {this.setState({allBooks: response})});
  }
  render() {
    return (
      <div className='bookContainer'>
        <h1>Boox List</h1>
        <ul>{
            this.state.allBooks.map((book) => {
              return  <li key={book.id}><Book book={book} /></li>
            })
          }</ul>
      </div>
    )
  }
}

export default BookContainer;
