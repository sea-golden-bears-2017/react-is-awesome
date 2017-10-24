import React, { Component } from 'react';
import Content from './Content';



class TableData extends Component {
  render() {
    return (
      <table>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Genre</th>
        </tr>
          { this.props.bookData.map((book) => {
            return <Content book={book}/>
            }) }
      </table>
    );
  }
}

export default TableData;
