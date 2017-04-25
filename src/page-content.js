import React, { Component } from 'react';
import './App.css';
import MainContainer from './main-container.js';
import NavBar from './navbar.js';

class PageContent extends Component {
  handleClick(i){
    console.log(i);
  }
  render() {
    return (
      <div className="main-container">
        <MainContainer />
        <NavBar onClick={(i) => this.handleClick(i)}/>
      </div>
    );
  }
}

export default PageContent;
