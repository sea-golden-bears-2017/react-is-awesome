import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import BookIndex from './components/books/BooksIndex'
import Profile from './components/profile/Profile'
import Login from './components/sessions/Login'
// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor() {
    super();
    this.state = {
      content: 'library'
    }
  }

  render(){
    let chosenContent = {
      'profile': <Profile />,
      'library': <BookIndex />
    }

    return (
      <div className="App">
        <div className="header">
          <NavBar
            pageLoad={ (e) =>
              this.setState({
                content: e.target.id
              })
            }
          />
        </div>
        <Login user={{}}/>
        <div className="mainContent">
          {chosenContent[this.state.content]}
        </div>
      </div>
    );
  }
}

export default App;
