import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Board from './components/Board';
import Header from './components/Header';
import Booklist from './components/Booklist';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor() {
    super();
    this.searchByGenre = this.searchByGenre.bind(this);
    this.readBook = this.readBook.bind(this);
    this.book = null;
    this.state = {
      currentUser: 'Devin',
      bookList: [],
      booksRead: [],
    };
  }

  searchByGenre(event) {
    let genre = event.target.id;
    genre = genre.replace(/\s/, '%20');
    $.ajax({
      url: `https://react-is-awesome-backend.herokuapp.com/books/search/${genre}`,
    }).done((response) => {
      this.setState({
        bookList: response,
      });
    });
  }

  readBook(book) {
    const newBooks = this.state.booksRead.slice();
    newBooks.push(book);

    this.setState({
      booksRead: newBooks,
    });
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: "https://react-is-awesome-backend.herokuapp.com/sessions",
  //     method: "POST",
  //     data: {
  //       user: {
  //         name: "maeve",
  //         password: "ham",
  //       }
  //     }
  //   }).done((response) => {
  //     console.log(response);
  //   })
  // }

  render() {
    console.log(this.state.booksRead);
    let bookList = null;
    if (this.state.bookList.length) {
      bookList = <Booklist books={this.state.bookList} readBook={this.readBook} />;
    }

    return (
      <div className="App">
        <Header title={this.state.currentUser} />
        <Board search={this.searchByGenre} booksRead={this.state.booksRead} />
        {bookList}
      </div>
    );
  }
}

export default App;
