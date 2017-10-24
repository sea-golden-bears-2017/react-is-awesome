import React, { Component } from 'react';
import Cell from './Cell'
import '../board.css'

const genres = ["Short story", "Realistic fiction", "Mystery", "Fantasy", "Essay", "Western", "Metafiction", "Fable", "Fanfiction", "Mythopoeia", "Horror", "Science fiction", "Tall tale", "Narrative nonfiction", "Classic", "Humor", "Speech", "Fairy tale", "Crime/Detective", "Historical fiction", "Fiction in verse", "Legend", "Mythology", "Folklore", "Textbook"]

class Board extends Component {
  constructor() {
    super();
    // this.createCell = this.createCell.bind(this);
  }

  createCell(genre) {
    const readBooksInGenre = this.props.booksRead.filter(book => book.genre === genre);
    return (
      <Cell genre={genre} search={this.props.search}>
        {readBooksInGenre.map(book => <div>{book.title}</div>)}
      </Cell>
  );
  }

  render() {
    return (
      <div className="Board">
        {genres.map((genre) => this.createCell(genre))}
      </div>
    );
  }
}

export default Board;
