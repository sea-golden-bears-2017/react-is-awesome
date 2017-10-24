import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <form onSubmit={this.handleSubmit}>
          <label>
            Find Book
            <input type="text" />
          </label>
          <input type="submit" value="Find" />
        </form>
      </div>
    );
  }
}



export default SearchBar;
