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

  filteredBooks() {
    const genreFilter = this.props.filter;

    if (genreFilter === "None" || !genreFilter) {
      return this.sortBooks();
    }
    const filterResult = this.sortBooks().filter(function(book) {
      return book.genre === genreFilter;
      })
    return filterResult;
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
        this.filteredBooks().map((book) => {
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
