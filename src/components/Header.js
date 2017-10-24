import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

export default Header;
