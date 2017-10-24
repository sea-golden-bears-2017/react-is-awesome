import React, { Component } from 'react';
import ListItem from './ListItem';
import '../genreList.css'

class GenreList extends Component {

  render() {
    return (
      <div className="genre-list-container">
        <ListItem bookList={this.props.bookList}/>
      </div>
    );
  }
}

export default GenreList;
