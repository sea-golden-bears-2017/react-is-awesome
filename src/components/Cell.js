import React, { Component } from 'react';
import $ from 'jquery';
import '../board.css'

class Cell extends Component {
  constructor() {
    super();
    this.searchByGenre = this.searchByGenre.bind(this)
  }

  searchByGenre(event) {
    let genre = event.target.id
    genre = genre.replace(/\s/, "%20")
    $.ajax({
      url: `https://react-is-awesome-backend.herokuapp.com/books/search/${genre}`,
      }).done((response) => {
      console.log(response);
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
