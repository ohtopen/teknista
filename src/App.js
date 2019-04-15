import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            TEKNISTÄ :D
          </h1>
          <img src={logo} className="App-logo" alt="logo" />

        </header>
        <body className="App-body">
        <p>The KY project team for all your ATK needs :D</p>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSekFXN84vf36wmOt5hmDSmC3fa2jGtJH3OBMrUMK9LiDsYTSg/viewform?embedded=true" width="640" height="907" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
        </body>
      </div>
    );
  }
}

export default App;
