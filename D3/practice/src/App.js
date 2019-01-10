import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    bars: [
      {
        date: '2017-01-02',
        high: 58,
        avg: 50,
        low: 34
      },
      {
        date: '2017-01-03',
        high: 59,
        avg: 50,
        low: 12
      },
      {
        date: '2017-01-04',
        high: 52,
        avg: 50,
        low: 32
      }
    ]
  };
  render() {
    console.log(this.state.bars);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
