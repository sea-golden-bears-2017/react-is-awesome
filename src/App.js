import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Board from './components/Board';
import Header from './components/Header';
import Booklist from './components/Booklist';
import LoginBox from './components/LoginBox';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor() {
    super();
    this.searchByGenre = this.searchByGenre.bind(this);
    this.displayBooklist = this.displayBooklist.bind(this);
    this.readBook = this.readBook.bind(this);
    this.navClick = this.navClick.bind(this);
    this.setCurrentUser = this.setCurrentUser.bind(this);
    this.book = null;
    this.state = {
      currentUser: 'Welcome!',
      bookList: [],
      booksRead: [],
      loginBox: false,
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

  setCurrentUser(username) {
    this.setState({
      currentUser: username
    })
  }

  readBook(book) {
    const newBooks = this.state.booksRead.slice();
    newBooks.push(book);
    this.setState({ booksRead: newBooks });
  }

  displayBooklist() {
    if (this.state.bookList.length > 0) {
      return <Booklist books={this.state.bookList} readBook={this.readBook} />;
    } else {
      return null
    }
  }

  navClick(event) {
    const click = event.target.id;
    if (click === 'login') {
      this.setState({
        loginBox: true,
      });
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
    let loginBox = null
    if (this.state.loginBox === true) {
      loginBox =  <LoginBox setUser={this.setCurrentUser}/>;
    }

    return (
      <div className="App">
        <Header title={this.state.currentUser} navClick={this.navClick} />
        {loginBox}
        <Board search={this.searchByGenre} booksRead={this.state.booksRead} />
        {this.displayBooklist()}
      </div>
    );
  }
}

export default App;
