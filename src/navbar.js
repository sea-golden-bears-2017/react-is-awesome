import React, { Component } from 'react';
import './App.css';

class NavBarButton extends Component {
  render() {
    return (
      <button>CLICK ME</button>
    )
  }
}

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav>
          <NavBarButton />
        </nav>
      </div>
    );
  }
}

export default NavBar;
