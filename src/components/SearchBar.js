import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function

class SearchBar extends Component {
  render() {
    return(
      <div className="searchBar">
        <form>
          <input type="text" value="" placeholder="Search for a book" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
