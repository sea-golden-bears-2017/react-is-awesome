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
      currentUser: 'oscar',
      books: [],
      booksRead: [{id: 85, title: "The Wives of Bath", author: "Miss Mackenzie Purdy", publisher: "Paulist Press", genre: "Mystery"}, {id: 358, title: "Great Work of Time", author: "Berry Weissnat", publisher: "Hackett Publishing Company", genre: "Essay"}, {id: 3, title: "Postern of Fate", author: "Cade Leuschke", publisher: "Charles Scribner's Sons", genre: "Essay"}, {id: 15, title: "Quo Vadis", author: "Mr. Ericka Hills", publisher: "Kensington Books", genre: "Fantasy"}, {id: 18, title: "Fame Is the Spur", author: "Dashawn Wisozk", publisher: "Tartarus Press", genre: "Short story"}, {id: 83, title: "Mr Standfast", author: "Johathan Kohler", publisher: "Kodansha", genre: "Metafiction"}],
      loginForm: false,
      name: '',
      password: '',
      token: "eyJ0b2tlbiI6MTAzfQ==",
      id: 103,
      error: '',
    }
  }

  getTitleAuthor(books) {
    return books.map((book) => {
      return {title: book.title, author: book.author}
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
    books.push(event.target.id)
    this.setState({ booksRead: books })
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
      this.setState({ token: tokenResponse })
      this.setState({ loginForm: false })
      this.setState({ currentUser: name })
      this.setState({ password: null })
      this.setState({ name: null })
      this.setState({ id: response.user_id })
      this.pullBooks()
    }).fail((msg, response) => {
      this.setState({ error: msg.responseJSON.message })
      this.setState({ password: '' })
      this.setState({ name: '' })
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
    if (this.state.loginForm === true){
      return (
      <Login
        onSubmit={this.handleSubmit}
        onNameChange={this.handleNameChange} onPasswordChange={this.handlePasswordChange}
        password={password}
        name={name}
        error={error} />
      )
    }else {
    return (
      <div className="App" onClick={this.clickOff}>
        <Header title={this.state.currentUser} />
        <Board searchFunction={this.searchByGenre}
               booksRead={this.state.booksRead}/>
        <GenreList bookList={this.state.books} addRead={this.addRead}/>
      </div>
    );
    }
  }
}
export default App;
