import React, { Component } from 'react';
// eslint-disable-next-line react/prefer-stateless-function
class Book extends Component {

  buttonValue() {
    if (this.props.buttonAction==="add") {
      return "Add to my Shelf"
    } else {
      return "I've Read it!"
    }
  }

  renderButton() {
    if (this.props.button === 'true') {
      return <button>{this.buttonValue()}</button>
    }
  }

  render() {
    return (
      <div>
        {this.renderButton()}{this.props.title} by {this.props.author}
      </div>
    );
  }
}
export default Book;
