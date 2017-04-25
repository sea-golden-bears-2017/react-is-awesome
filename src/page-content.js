import React, { Component } from 'react';
import './App.css';
import MainContainer from './main-container.js';
import NavBar from './navbar.js';

class PageContent extends Component {
  render() {
    return (
      <div className="main-container">
        <MainContainer />
        <NavBar />
      </div>
    );
  }
}

export default PageContent;
