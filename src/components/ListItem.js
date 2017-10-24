import React, { Component } from 'react';
import '../genreList.css'
import Header from './Header';

class ListItem extends Component {

  createList(bookList) {
  return(
      <table>
          <tr>
            <td className="table-header">Title</td>
            <td className="table-header">Author</td>
          </tr>
    {bookList.map((book) => {
      return (<tr>
                <td className="title">{book.title}</td>
                <td>{book.author}</td>
              </tr>
              )
            })}
      </table> )
  }

  render() {
    if (this.props.bookList.length > 0){
      return (
      <div className="genre-list">
          <Header title="Genre goes here"/>
          {this.createList(this.props.bookList)}
      </div>)
    } else {
      return (<div></div>)
    }
  }
}
export default ListItem;
