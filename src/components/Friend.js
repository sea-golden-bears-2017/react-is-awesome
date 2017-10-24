import React, { Component } from 'react';
// eslint-disable-next-line react/prefer-stateless-function
class Friend extends Component {
  render() {
    return (
      <div>{this.props.name}</div>
    );
  }
}
export default Friend;
