import React, { Component } from 'react';
import $ from 'jquery';
import '../board.css'

// eslint-disable-next-line react/prefer-stateless-function
class Cell extends Component {
  constructor() {
    super();
    this.searchByGenre = this.searchByGenre.bind(this)
    this.state = {
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

  render() {
    return (
      <div className="Cell" id={this.props.genre} onClick={this.searchByGenre}>
        <p>{this.props.genre}</p>
      </div>
    );
  }
}

export default Cell;
