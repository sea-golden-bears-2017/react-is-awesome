import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import Section from './components/Section.js';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [{title: "The Longest Book",
              author: "jsimoni42"},
              {title: "The Shortest Book",
              author: "libby-glo"}],
    }
  }

  // componentWillMount() {
  //   $.ajax({
  //     method: 'GET',
  //     url: 'https://react-is-awesome-backend.herokuapp.com/books'
  //   }).done((response) => {
  //     this.setState({
  //       books: response });
  //   })
  // }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Please Login</h1>
          <h2>Your book experience awaits</h2>
        </div>
        <Section books={this.state.books} />
      </div>
    );
  }
}

export default App;
