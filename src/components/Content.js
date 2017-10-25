import React, { Component } from 'react';
import BookList from './BookList';


// eslint-disable-next-line react/prefer-stateless-function
class Content extends Component {
  render() {
    return (
      <div className="Content">
        This is content
        <BookList />
      </div>
    );
  }
}

export default Content;
