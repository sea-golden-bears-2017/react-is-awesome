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
    this.displayBooklist = this.displayBooklist.bind(this);
    this.readBook = this.readBook.bind(this);
    this.book = null;
    this.state = {
      currentUser: 'Devin',
      bookList: [],
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
    console.log("helloooo")
    console.log(book)
  }

  displayBooklist() {
    if (this.state.bookList.length > 0) {
      return <Booklist books={this.state.bookList} readBook={this.readBook} />;
    } else {
      return null
    }
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
    return (
      <div className="App">
        <Header title={this.state.currentUser} />
        <Board search={this.searchByGenre} />
        {this.displayBooklist()}
      </div>
    );
  }
}

export default App;
