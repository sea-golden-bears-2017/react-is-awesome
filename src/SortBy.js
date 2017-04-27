import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';


class SortBy extends Component {
  constructor() {
    super();

    this.change = this.change.bind(this);
  }

  change(event) {
      const sorter = event.target.value;
      this.props.sortBooks(sorter);
  }

  render() {
    return (
      <div>
        <select id="sorter-selector" onChange={this.change}>
          <option value="author">author</option>
          <option selected="selected" value="title">title</option>
          <option value="genre">genre</option>
          <option value="publisher">publisher</option>
        </select>
      </div>

    )
  }
}


export default SortBy;
