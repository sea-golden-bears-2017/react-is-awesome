import React, { Component } from 'react';
import $ from 'jquery';
import Book from './Book';


// eslint-disable-next-line react/prefer-stateless-function
class BookShelf extends Component {

  constructor() {
    super();
    this.state = {
      books: [],
    }
  }

  componentWillMount() {
    $.ajax({
      method: 'GET',
      url: 'https://react-is-awesome-backend.herokuapp.com/books'
    }).done((response) => {
      this.setState({
        books: response });
    })
  }

  render() {
    return (
      <div className="bookshelf">
        <h1>Bookshelf-ios</h1>
        <ul>
          {this.state.books.map((book) => <Book title={book.title} author={book.author}/>
          )}
      </ul>
      </div>
    );
  }
}
export default BookShelf;
