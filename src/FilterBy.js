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
            <option selected="selected" value="None">None</option>
            <option value="Fairy tale">Fairy tale</option>
            <option value="Fanfiction">Fanfiction</option>
            <option value="Fable">Fable</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Fiction narrative">Fiction narrative</option>
            <option value="Folklore">Folklore</option>
            <option value="Biography/Autobiography">Biography/Autobiography</option>
            <option value="Classic">Classic</option>
            <option value="Comic/Graphic Novel">Comic/Graphic Novel</option>
            <option value="Crime/Detective">Crime/Detective</option>
            <option value="Essay">Essay</option>
            <option value="Historical fiction">Historical fiction</option>
            <option value="Horror">Horror</option>
            <option value="Humor">Humor</option>
            <option value="Legend">Legend</option>
            <option value="Metafiction">Metafiction</option>
            <option value="Mystery">Mystery</option>
            <option value="Mythology">Mythology</option>
            <option value="Mythopoeia">Mythopoeia</option>
            <option value="Narrative nonfiction">Narrative nonfiction</option>
            <option value="Realistic fiction">Realistic fiction</option>
            <option value="Reference book">Reference book</option>
            <option value="Science fiction">Science fiction</option>
            <option value="Short story">Short story</option>
            <option value="Speech">Speech</option>
            <option value="Suspense/Thriller">Suspense/Thriller</option>
            <option value="Tall tale">Tall tale</option>
            <option value="Textbook">Textbook</option>
            <option value="Western">Western</option>
          </select>
      )
    }
};

export default FilterBy;
