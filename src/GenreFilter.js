import React, { Component } from 'react';
import $ from 'jquery';

class GenreFilter extends Component {
  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(filter) {
    if (filter === 'All'){
      this.props.updateBookList(this.props.bookArray)
    } else {

      var filteredBooks = this.props.bookArray.filter((book) => {return (
        book.genre === filter
      )});
      this.props.updateBookList(filteredBooks);
    }
  }

  render() {
    var filterOptions = ['All','Classic','Fantasy','Legend'];

    return (
    <div className="filter-button-container">
      {filterOptions.map((filter)=>{
        const handler = () => {
          this.clickHandler(filter)

        };
        return (<button onClick={handler}>{filter}</button>)})}
    </div>
    )
  }

}

export default GenreFilter;
