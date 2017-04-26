import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';


class SortBy extends Component {
  constructor() {
    super();
    this.state = {
      sorter: ""
    }

    this.change = this.change.bind(this);
  }

  change(event) {

    this.setState({
      sorter: event.target.value
    })
  }

render() {
    return (
      <div>
        <select id="sorter-selector" onChange={this.change}>
          <option value="author">author</option>
          <option value="title">title</option>
          <option value="genre">genre</option>
          <option value="publisher">publisher</option>
        </select>
        {this.state.sorter}
      </div>

    )
  }
}


export default SortBy;
