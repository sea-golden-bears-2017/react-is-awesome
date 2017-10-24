import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Content from './components/Content';
import NavBar from './components/NavBar';
// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <Content />
        <NavBar />
      </div>
    );
  }
}

export default App;
