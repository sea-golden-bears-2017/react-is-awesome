import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';

class FilterBy extends Component {
  constructor() {
    super();

    this.change = this.change.bind(this);
  }

  change(event) {
      const filter = event.target.value;
      this.props.filterBooks(filter);
  }


    render() {
      return(
          <select id="genre-filter" onChange={this.change}>
            <option value="Fairy tale">Fairy tale</option>
            <option value="Fanfiction">Fanfiction</option>
            <option value="Fable">Fable</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Fiction narrative">Fiction narrative</option>
            <option value="Folklore">Folklore</option>
          </select>
      )
    }
};

export default FilterBy;
