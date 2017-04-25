import React, { Component } from 'react';
import logo from './logo.svg';
import './NavBar.css';


// eslint-disable-next-line react/prefer-stateless-function
class NavBar extends Component {
  render() {
    return(
      <nav className="main-nav">
        <div className = "nav-left"> <a href = "#" >Home</a></div>
        <div className = "nav-right"> <a href = "#" >Login</a> <a href = "#">Register</a></div>
        </nav>);
  }
}

export default NavBar;
