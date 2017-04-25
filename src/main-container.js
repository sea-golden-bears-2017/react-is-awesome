import React, { Component } from 'react';
import './App.css';

class MainContainer extends Component {
  render() {
    return (
      <div>
        {this.props.content}
      </div>
    );
  }
}

export default MainContainer;
