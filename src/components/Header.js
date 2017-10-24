import React, { Component } from 'react';


// eslint-disable-next-line react/prefer-stateless-function
class Header extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.content}</h1>
      </div>
    );
  }
}

export default Header;
