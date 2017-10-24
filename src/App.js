import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import Board from './components/Board';
import Header from './components/Header';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: "Devin"
    }
  }

  componentDidMount() {
    $.ajax({
      url: "https://react-is-awesome-backend.herokuapp.com/sessions",
      method: "POST",
      data: {
        user: {
          name: "maeve",
          password: "ham",
        }
      }
    }).done((response) => {
      console.log(response);
    })
  }

  render() {
    return (
      <div className="App">
        <Header title={this.state.currentUser} />
        <Board />
      </div>
    );
  }
}

export default App;
