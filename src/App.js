import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import Section from './components/Section';
import Book from './components/Book';
import NavBar from './components/NavBar';
import Friend from './components/Friend';
// eslint-disable-next-line react/prefer-stateless-function

const createBook = ({title, author, id}) => {
  return <Book key={id} title={title} author={author} />
}

const createFriend = ({name, id}) => {
  return <Friend key={id} name={name} />
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      friends: [],
      current: "home",
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

  go(event) {
    this.setState({
      content: event.target.id
    })
  }

  render() {
    const books = this.state.books.map(createBook);
    const friends = this.state.friends.map(createFriend);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Please Login</h1>
          <h2>Your book experience awaits</h2>
        </div>
        <NavBar onClick={(event) => this.go(event)} />
        <div className="section-container">
          <Section key="bookshelf" header="Bookshelf">{books}</Section>
          <Section key="friends" header="Friends">{friends}</Section>
        </div>
      </div>
    );
  }
}

export default App;
