import React, { Component } from 'react';
import './App.css';


class NavBar extends Component {
  render() {
    return (
      <div>
        {this.props.buttons}
      </div>
    );
  }
}

export default NavBar;
