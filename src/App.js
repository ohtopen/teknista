import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            TEKNISTÄ
          </h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <body className="App-body">
        <p>The KY committee for all your ATK needs :D</p>
        </body>
      </div>
    );
  }
}

export default App;
