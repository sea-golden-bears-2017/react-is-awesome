import React, {Component} from 'react';
import Header from '../Header';
import BookTable from './BookTable';
import NavBar from '../NavBar'
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
        <NavBar />
        <Header content='All Books' />
        <BookTable bookData={this.state.bookData}/>
      </div>
    )
  }
}

export default BookIndex;
