import React, { Component } from 'react';
import $ from 'jquery';
import '../board.css'

// eslint-disable-next-line react/prefer-stateless-function
class Cell extends Component {
  constructor() {
    super();
  }




  render() {
    const getRandomColor = () => {
      const colors = ["aquamarine", 'olive', 'bisque', 'coral', 'darkslategray', 'indianred']
      return colors[Math.floor(Math.random() * 6)]
    }
    const setColorStyle = () => {
      if(this.props.hasReadABook === 'true') {
      return  {'background-color': getRandomColor()}
      }
    }
    return (
      <div className={"Cell " + this.props.hasReadABook} id={this.props.genre} onClick={this.props.onClick} style={setColorStyle()}>
        <p>{this.props.genre}</p>
        <p>{this.props.hasReadABook}</p>
      </div>
    );
  }
}

export default Cell;
