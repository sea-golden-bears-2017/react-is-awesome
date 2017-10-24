import React, {Component} from 'react';
import Header from './Header';
import $ from 'jquery';


class BookIndex extends Component {
  componentDidMount() {
    $.ajax({
      url: 'https://react-is-awesome-backend.herokuapp.com/books/',
      method: 'GET'
    }).done((response) => {
      console.log(response)
    })
  }
  render(){
    return (
      <Header content="All Books"/>
    )
  }
}

export default BookIndex;
