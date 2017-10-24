import React, {Component} from 'react';
import Header from './Header';
import $ from 'jquery';


class BookIndex extends Component {
  constructor() {
    super();
    this.state = {
      bookData: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: 'https://react-is-awesome-backend.herokuapp.com/books/',
      method: 'GET'
    }).done((response) => {
      this.setState({
        bookData: response
      })
    })
  }
  
  render(){
    return (
      <div>
        <Header content="All Books"/>
        <table>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
          </tr>
            { this.state.bookData.map((book) => {
              return (
              <tr>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
              </tr> )
              }) }
        </table>
      </div>
    )
  }
}

export default BookIndex;
