import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import Board from './components/Board';
import Header from './components/Header';
import GenreList from './components/GenreList';
import Login from './components/Login';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor() {
    super();
    this.searchByGenre = this.searchByGenre.bind(this)
    this.clickOff = this.clickOff.bind(this)
    this.addRead = this.addRead.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.state = {
      currentUser: '',
      books: [],
      booksRead: [],
      loginForm: true,
      name: '',
      password: '',
      token: "",
      id: '',
      error: '',
    }
  }

  getTitleAuthor(books) {
    return books.map((book) => {
      return {id: book.id, title: book.title, author: book.author, genre: book.genre}
    })
  }

  searchByGenre(event) {
    let genre = event.target.id
    genre = genre.replace(/\s/, "%20")
    $.ajax({
      url: `https://react-is-awesome-backend.herokuapp.com/books/search/${genre}`,
      }).done((response) => {
        this.setState({books: this.getTitleAuthor(response)})
    })
  }

  clickOff(event) {
    this.setState({books: []})
  }

  addRead(event) {
    const books = this.state.booksRead.slice();
    const bookId = event.target.id;
    this.postBook(bookId);
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = this.state.name
    const password = this.state.password
    $.ajax({
      url: "https://react-is-awesome-backend.herokuapp.com/sessions",
      method: "POST",
      data: {user: {name: name, password: password}}
    }).done((response) => {
      const tokenResponse = response.token
      this.setState({ token: tokenResponse, currentUser: name, password: '', name: '', id: response.user_id })
      this.pullBooks()
      this.setState({ loginForm: false })
    }).fail((msg, response) => {
      this.setState({ error: msg.responseJSON.message, password: '', name: '' })
    })
  }

  pullBooks() {
    $.ajax({
      url: `https://react-is-awesome-backend.herokuapp.com/users/${this.state.id}/books`,
      data: {token: this.state.token},
    }).done((response) => {
      this.setState({ booksRead: response })
    })
  }

  postBook(bookId) {
    $.ajax({
      url: `https://react-is-awesome-backend.herokuapp.com/users/${this.state.id}/books/${bookId}`,
      data: {token: this.state.token},
      method: "PUT",
    }).done((response) => {
      // this.setState({ booksRead: response })
      this.pullBooks()
    })
  }

  handleNameChange(name){
    this.setState({
      name: name
    })
  }

  handlePasswordChange(password){
    this.setState({
      password: password
    })
  }


  render() {
    console.log(this.state)
    const name = this.state.name;
    const password = this.state.password;
    const error = this.state.error;
    if (this.state.loginForm === true) {
      return (
      <Login
        onSubmit={this.handleSubmit}
        onNameChange={this.handleNameChange} onPasswordChange={this.handlePasswordChange}
        password={password}
        name={name}
        error={error} />
      )
    } else {
      let list = null;
      if (this.state.books.length > 0) {
        list = <GenreList bookList={this.state.books}
                   addRead={this.addRead} />;
      }
    return (
      <div className="App" onClick={this.clickOff} >
        <Header title={this.state.currentUser} />
        <Board searchFunction={this.searchByGenre}
               booksRead={this.state.booksRead} />
        {list}
      </div>
    );
    }
  }
}
export default App;
