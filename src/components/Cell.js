import React, { Component } from 'react';
import '../board.css'

class Cell extends Component {
  render() {
    return (
      <div className="Cell">
        <p>{this.props.genre}</p>
      </div>
    );
  }
}

export default Cell;
