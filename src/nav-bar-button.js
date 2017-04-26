import React, { Component } from 'react';
import './App.css';

class NavBarButton extends Component {
  render() {
    return (
      <button onClick={() => this.props.onClick()}>{this.props.value}</button>
    )
  }
}

export default NavBarButton;
