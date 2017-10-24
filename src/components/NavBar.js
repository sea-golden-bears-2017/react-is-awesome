import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <div className="NewBook">
          New Book
        </div>
        <div className="MyBooks">
          My Books
        </div>
        <div className="Friendz">
          Friendz
        </div>
      </div>
    );
  }
}

export default NavBar;
