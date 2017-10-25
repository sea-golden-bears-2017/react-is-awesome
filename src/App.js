import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Content from './containers/Content';
import Footer from './components/Footer';
// eslint-disable-next-line react/prefer-stateless-function

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      current: 'login',
      token: '',
      name: '',
      user_id: '',
    }
    this.handleUserLogin = this.handleUserLogin.bind(this);
  }

  componentWillMount() {

    $.ajax({
      method: 'GET',
      url: 'https://react-is-awesome-backend.herokuapp.com/books'
    }).done((response) => {
      this.setState({
        books: response });
    });
  }

  go(event) {
    this.setState({
      current: event.target.id
    })
  }

  handleUserLogin({token, name, user_id, current}) {
    this.setState({name: name,
                   user_id: user_id,
                   token: token,
                   current: current,
                 });
  }


  render() {
    return (
      <div className="App">
        <Header name={this.state.name} />
        <NavBar onClick={(event) => this.go(event)} username={this.state.username} />
        <Content books={this.state.books} current={this.state.current} name={this.state.name} handleUserLogin={this.handleUserLogin}
        user_id={this.state.user_id}
        token={this.state.token} />
        <Footer />
      </div>
    );
  }
}

export default App;
