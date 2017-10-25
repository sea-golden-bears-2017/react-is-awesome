import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login.js';
import Profile from './components/Profile.js';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';

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
      page: 'about',
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

  navigation(id){
    this.setState({page: id});
  }

  render() {
    const pages = {
                    'home': <Home />,
                    'profile': <Profile user={this.state} />,
                    'about': <About />,
                  }

    return (
      <div className="App">
        <div>
            <NavBar contentLoad={(e) => this.navigation(e.target.id)} />
        </div>
        {this.state.token ? pages[this.state.page] : <Login login={this.login} />}
      </div>
    );
  }
}

export default App;
