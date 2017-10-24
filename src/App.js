import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import Section from './components/Section';
import Book from './components/Book';
// eslint-disable-next-line react/prefer-stateless-function

const createBook = ({title, author, id}) => {
  return <Book key={id} title={title} author={author} />
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      friends: [],
    }
  }

  componentWillMount() {
    $.ajax({
      method: 'GET',
      url: 'https://react-is-awesome-backend.herokuapp.com/books'
    }).done((response) => {
      this.setState({
        books: response });
    });

    $.ajax({
      method: 'GET',
      url: 'https://react-is-awesome-backend.herokuapp.com/users'
    }).done((response) => {
      this.setState({
        friends: response });
    })
  }

  render() {
    const books = this.state.books.map(createBook);
    const friends = this.state.friends.map((friend) => {
      return <div>{friend.name}</div>
    });
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Please Login</h1>
          <h2>Your book experience awaits</h2>
        </div>
        <div className="section-container">
          <Section header="Bookshelf">{books}</Section>
          <Section header="Friends">{friends}</Section>
        </div>
      </div>
    );
  }
}

export default App;
