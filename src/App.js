import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Login from './Login';
import Nerdmeter from './Nerdmeter'

class Logout extends Component {
  handleLogout() {
    // event.preventDefault();
    const logoutForm = this;
    $.ajax({
    type: 'DELETE',
    url: 'http://localhost:3000/sessions/161',
    crossDomain: true,
    xhrFields: { withCredentials: true },
    }).done((response) => {
      console.log(response)
      // logoutForm.props.onNewSession(response.user_id);
    });
  }
  render() {
    return(
    <a onClick={()=> this.handleLogout()}>Logout</a>
  )
  }
}

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: 'login',
      userId: '',
    };
  }
  loggedIn(id) {
    this.setState({ mode: 'logged', userId: id });
  }
  render() {
    return (
      <div className="App">
        <Logout />
        <div className="App-header">
          <h1>Nerdmeter</h1>
        </div>
        <div id="content">
          {(this.state.mode === 'login') ? <Login onNewSession={(k) => this.loggedIn(k)} /> : <Nerdmeter userId={this.state.userId} />}
        </div>
      </div>
    );
  }
}

export default App;
