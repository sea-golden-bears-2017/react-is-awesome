import React, {Component} from 'react';

class Book extends Component {
  render() {
    let book = this.props.book;
    return (
      <tr>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.genre}</td>
      </tr>
    );
  }
}

export default Book;
