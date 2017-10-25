import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Content from './components/Content';
import NavBar from './components/NavBar';
import '../font-awesome-4.7.0/css/font-awesome.min.css';
import $ from 'jquery';
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
