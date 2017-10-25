import React, { Component } from 'react';
import NavBar from './NavBar'
import BookIndex from './books/BooksIndex'
import Profile from './profile/Profile'


// eslint-disable-next-line react/prefer-stateless-function
class AfterLogin extends Component {
  constructor() {
    super();
    this.state = {
      content: 'profile'
    }
  }

  render(){
    let chosenContent = {
      'profile': <Profile />,
      'library': <BookIndex />,
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
        <div className="mainContent">
          {chosenContent[this.state.content]}
        </div>
      </div>
    );
  }
}

export default AfterLogin;
