import React, { Component } from 'react';
import $ from 'jquery';
import '../board.css';

// eslint-disable-next-line
class Cell extends Component {
  render() {
    return (
      <div className="Cell" id={this.props.genre} onClick={this.props.search} role="button" tabIndex="0">
        <p>{this.props.genre}</p>
        {this.props.children}
      </div>
    );
  }
}

export default Cell;
