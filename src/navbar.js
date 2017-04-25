import React, { Component } from 'react';
import './App.css';

class NavBarButton extends Component {
  render() {
    return (
      <button>{this.props.value}</button>
    )
  }
}

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav>
          <NavBarButton value="Register"/>
          <NavBarButton value="Login/Logout"/>
          <NavBarButton value="Home"/>
        </nav>
      </div>
    );
  }
}

export default NavBar;
