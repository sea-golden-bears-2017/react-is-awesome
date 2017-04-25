import React, { Component } from 'react';
// import BookItem from './Book.js';

class BookContainer extends Component {
  constructor() {
    super();
    this.state = {
      allBooks: [{ id: 6, title: "The Mermaids Singing", author: "Miss Lilyan McCullough", publisher: "SAGE Publications", genre: "Reference book"}, { id: 7, title: "The Mermaids Singing: The Sequel", author: "Miss Lilyan McCullough", publisher: "SAGE Publications", genre: "Reference book"}]
    };
  }
  render() {
    return (
      <div className='bookContainer'>
        <h1>Boox List</h1>
        <ul>{
            this.state.allBooks.map((book) => {
              return <li>
                      <button className='bookLink' id={`${book.id}`}>
                        {`${book.title} by ${book.author}`}
                      </button>
                      <button className='delete_btn' id={`${book.id}`}>
                        Delete Book
                      </button>
                     </li>
            })
          }</ul>
      </div>
    )
  }
}


export default BookContainer;
