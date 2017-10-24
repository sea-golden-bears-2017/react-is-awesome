import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import Board from './components/Board';
import Header from './components/Header';
import GenreList from './components/GenreList';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor() {
    super();
    this.searchByGenre = this.searchByGenre.bind(this)
    this.clickOff = this.clickOff.bind(this)
    this.state = {
      currentUser: "Devin",
      books: [],
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

  render() {
    return (
      <div className="App" onClick={this.clickOff}>
        <Header title={this.state.currentUser} />
        <Board searchFunction={this.searchByGenre}/>
        <GenreList bookList={this.state.books}/>
      </div>
    );
  }
}
export default App;
