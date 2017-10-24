import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import Section from './components/Section';
// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
    }
  }

  componentWillMount() {
    $.ajax({
      method: 'GET',
      url: 'https://react-is-awesome-backend.herokuapp.com/books'
    }).done((response) => {
      this.setState({
        books: response.slice(0,10) });
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Please Login</h1>
          <h2>Your book experience awaits</h2>
        </div>
        <div className="section-container">
          <Section books={this.state.books} />
          <Section books={this.state.books} />
        </div>
      </div>
    );
  }
}

export default App;
