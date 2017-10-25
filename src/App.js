import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login.js';
import Profile from './components/Profile.js';
import NavBar from './components/NavBar'

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props){
    super(props);
    // TODO: Come back 2 dis
    // this.state = {
    //   page: 'home',
    //   user_id: null,
    //   book_id: null,
    //   token: eyJ0b2tlbiI6MTYxfQ==\n
    // };
    this.state = {
      page: 'profile',
      user_id: 161,
      book_id: null,
      token: "eyJ0b2tlbiI6MTYxfQ==\n",
      username: "krystal"
    };
    this.login = this.login.bind(this);
  }

  login(response, username) {
    this.setState({ user_id: response.user_id,
                    page: 'profile',
                    token: response.token,
                    username: username,
                });
  }

  render() {
    return (
      <div className="App">
        <div>
            <NavBar />
        </div>
        {this.state.token ? <Profile user={this.state}/> : <Login login={this.login} />}
      </div>
    );
  }
}

export default App;
