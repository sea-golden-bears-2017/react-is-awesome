import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookShelf from './components/BookShelf.js';
import FriendShelf from './components/FriendShelf.js';
import Login from './components/Login.js';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props){
    super(props);
    // TODO: Come back 2 dis
    this.state = {
      page: 'home',
      user_id: null,
      book_id: null,
    };
    this.login = this.login.bind(this);
  }

  login(response) {
    this.setState({user_id: response.id});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Please Login</h1>
          <h2>Your book experience awaits</h2>
        </div>
        {/* <div className="bookshelf-container">
        <BookShelf />
      </div>
        <div className="friendshelf-container">
        <FriendShelf />
      </div> */}
        <Login />
      </div>
    );
  }
}

export default App;
