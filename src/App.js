import React, { Component } from 'react';
import './App.css';
import PageContent from './page-content.js';



// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Book Scrubz</h2>
          <PageContent />
        </div>
      </div>
    );
  }
}

export default App;
