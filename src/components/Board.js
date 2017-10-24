import React, { Component } from 'react';
import Cell from './Cell'
import '../board.css'


// eslint-disable-next-line react/prefer-stateless-function

const genres = ["Short story", "Realistic fiction", "Mystery", "Fantasy", "Essay", "Western", "Metafiction", "Fable", "Fanfiction", "Mythopoeia", "Horror", "Science fiction", "Tall tale", "Narrative nonfiction", "Classic", "Humor", "Speech", "Fairy tale", "Crime/Detective", "Historical fiction", "Fiction in verse", "Legend", "Mythology", "Folklore", "Textbook"]

class Board extends Component {
  constructor() {
    super();
    this.createCell = this.createCell.bind(this);
  }

  createCell(genre) {
    const matchingGenreBooks = this.props.booksRead.filter(book=>book.genre === genre)
    let bookTitle
    if (matchingGenreBooks.length > 0) {
      bookTitle = matchingGenreBooks[matchingGenreBooks.length - 1].title
    }
    return (
      <Cell genre={genre} search={this.props.search} theBook={bookTitle} />
    )
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
