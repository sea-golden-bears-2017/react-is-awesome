import React, { Component } from 'react';
import ListItem from './ListItem';
import Header from './Header';
import '../genreList.css'

class GenreList extends Component {

  render() {
    return (
      <div className="genre-list-container">
        <Header title="Genre goes here"/>
        <ListItem bookList={this.props.bookList}/>
      </div>
    );
  }
}

export default GenreList;
