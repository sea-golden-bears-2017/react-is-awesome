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
    this.switchPage = this.switchPage.bind(this);
    this.state = {
      user: {
        name: null,
        id: null,
        token: null,
      },
      content: 'loginbox',
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
    this.switchPage('activityLog');
  }

  switchPage(page) {
    this.setState({
      content: page,
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <Content login={this.login} page={this.state.content} />
        <NavBar />
      </div>
    );
  }
}

export default App;
