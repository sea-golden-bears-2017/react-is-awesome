import React, { Component } from 'react';
import $ from 'jquery';
import '../board.css';

class Cell extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="Cell" id={this.props.genre} onClick={this.props.search} role="button" tabIndex="0">
        <p>{this.props.genre}</p>
      </div>
    );
  }
}

export default Cell;
