import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';


class SortBy extends Component {

  render() {
    return (
      <div>
        <select name="select">
          <option value="value1">author</option>
          <option value="value2" selected>title</option>
          <option value="value3">genre</option>
          <option value="value3">publisher</option>
        </select>
      </div>
    )
  }
}

export default SortBy;
