import React, { Component } from 'react';

class BookItem extends Component {
  constructor() {
    super();
    this.state = {
      books: [{ id: 6, title: "The Mermaids Singing", author: "Miss Lilyan McCullough", publisher: "SAGE Publications", genre: "Reference book" }]
    };
  }
  render() {
    return (
      <div className="Header"><h1>{this.state.books[0].title}</h1></div>
    )
  }
}

export default BookItem;
