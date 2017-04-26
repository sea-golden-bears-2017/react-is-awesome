import React, { Component } from 'react';
// import $ from 'jquery';
import './BookList.css';
import './App.css';

class BookList extends Component {

  sortBooks() {
    const sorter = this.props.sortThing;
    const sorted = this.props.foundBooks.slice();
    sorted.sort(function(a,b) {
      if (a[sorter] > b[sorter]) {
        return 1;
      }
      if (a[sorter] < b[sorter]) {
        return -1;
      }
      return 0;
    });
    return sorted;
  }

  render() {
    return (
      <div id="bookList">
        <table>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Publisher</th>
          </tr>
          {
        this.sortBooks().map((book) => {
        return (
          <tr>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.genre}</td>
            <td>{book.publisher}</td>
          </tr>
        );
      })
      }
  </table>
</div>
)}
}

export default BookList;
