import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Content from './components/Content';
import NavBar from './components/NavBar';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor() {
    super();
    this.login = this.login.bind(this);
    this.state = {
      user: {
        name: null,
        id: null,
        token: null,
      },
    };
  }

  login({ name, id, token }) {
    this.setState({
      user: {
        name,
        id,
        token,
      },
    });
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <SearchBar />
        <Content login={this.login} />
        <NavBar />
      </div>
    );
  }
}

export default App;
