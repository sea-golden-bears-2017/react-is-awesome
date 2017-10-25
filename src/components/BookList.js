import React, { Component } from 'react';
import $ from 'jquery';

// eslint-disable-next-line react/prefer-stateless-function
class BookList extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
    };
  }

  displayBook(book) {
    return `${book.title} written by ${book.author}`
  }

  componentDidMount() {
    console.log('it mounted');
    const url = 'https://react-is-awesome-backend.herokuapp.com/books'
    $.ajax({
      url,
      method: 'GET',
      dataType: 'JSON'
    }).done(response => {
      this.setState({'books': response});
    })

  }

  render() {
    return (
      <div className="BookList">
        {this.state.books.map(book => this.displayBook(book))}
      </div>
    );
  }
}

export default BookList;
