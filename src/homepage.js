import React , { Component } from 'react';
import './App.css';
import BookContainer from './book-container'

class HomePage extends Component {
  render() {
    return (
      <div>
        <BookContainer />
      </div>
    )
  }
}

export default HomePage;
