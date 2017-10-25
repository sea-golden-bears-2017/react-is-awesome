import React, { Component } from 'react';

class Book extends Component {
  constructo

  render() {
    return(
      <ul className="BookList">
        {this.props.books.map((book) => this.createBook(Book))};
      </ul>
    );
  }
}

export default Book;
