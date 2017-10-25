import React, { Component } from 'react';
import './App.css';
import Login from './components/sessions/Login'
import AfterLogin from './components/AfterLogin'


// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor() {
    super();

    this.state = {
      content: 'login'
    }

    this.loginLoad = this.loginLoad.bind(this)
  }

  loginLoad() {
    this.setState({
      content: 'after-login'
    })
  }

  render(){
    let chosenContent = {
      'after-login': <AfterLogin />,
      'login': <Login loginLoad={this.loginLoad} />
    }

    return (
      <div className='App'>
        {chosenContent[this.state.content]}
      </div>
    );
  }
}

export default App;
