import React, { Component } from 'react';
import $ from 'jquery';
import Book from './Book';

// eslint-disable-next-line react/prefer-stateless-function
class BookShelf extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      library: false,
    }
  }

  getAllBooks(){
    $.ajax({
      method: 'GET',
      url: "https://react-is-awesome-backend.herokuapp.com/books",
      data: {token: this.props.user.token}
    }).done((response) => {
      this.setState({ books: response, library: true });
    })
  }

  getUserBooks(){
    $.ajax({
      method: 'GET',
      url: `https://react-is-awesome-backend.herokuapp.com/users/${this.props.user.user_id}/books`,
      data: {token: this.props.user.token}
    }).done((response) => {
      this.setState({ books: response, library: false });
    })
  }

  readBook(book_id) {
    $.ajax({
      method: "PUT",
      url: `https://react-is-awesome-backend.herokuapp.com/users/${this.props.user.user_id}/books/${book_id}`,
      data: { token: this.props.user.token }
    }).done((response) => {
      console.log(response)
      this.getUserBooks()
    })
  }

  componentWillMount() {
    this.getUserBooks();
  }

  showBook(book) {
    if (this.state.library) {
      return (
        <div>
          <Book author={book.author} title={book.title} />
          <button onClick={() => this.readBook(book.id)}>README</button>
        </div>
      );
    }

    return (
      <div>
        <Book author={book.author} title={book.title} />
      </div>
    );
  }

  render() {
    return (
      <div className="bookshelf-container">
        <h1>Bookshelf-ios</h1>
        <ul>
          {this.state.books.map((book) => this.showBook(book))}
        </ul>
        {this.state.library ? null : <button onClick={() => this.getAllBooks()}>Read More Books</button>}
      </div>
    );
  }
}
export default BookShelf;
