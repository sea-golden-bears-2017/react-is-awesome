import React, { Component } from 'react';
import '../genreList.css'

class ListItem extends Component {

  createList(bookList) {
  return  bookList.map((book) => {
      return (<tr>
                <td className="title">{book.title}</td>
                <td>{book.author}</td>
              </tr>
              )
      })
  }

  render() {
    return (
      <div className="genre-list">
        <table>
          <tr>
            <td className="table-header">Title</td>
            <td className="table-header">Author</td>
          </tr>
          {this.createList(this.props.bookList)}
        </table>
      </div>
    )
  }
}
export default ListItem;
