import React, { Component } from 'react';
import $ from 'jquery';
import './BookList.css';
import './App.css';

class BookList extends Component {

// {this.state.books.map(book => <p>{book.title}</p> )}
//
// {/* {sortedBooks.map(book => <p>{book.title}</p> )} */}
//
// var sortedBooks = this.state.books.sort(function(a,b) {
//   return a.title > b.title;
// });
//
// }

sortBooks() {

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
        this.props.foundBooks.map((book) => {
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
