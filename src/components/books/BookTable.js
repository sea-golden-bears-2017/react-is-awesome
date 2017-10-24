import React, { Component } from 'react';
import Book from './Book';



class BookTable extends Component {
  render() {
    return (
      <table>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Genre</th>
        </tr>
          { this.props.bookData.map((book) => {
            return <Book book={book}/>
            }) }
      </table>
    );
  }
}

export default BookTable;
