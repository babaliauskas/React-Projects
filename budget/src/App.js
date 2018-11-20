import React, { Component } from 'react';

import AppRouter from './routers/AppRouter';
import './firebase/firebase'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <AppRouter />
      </div>
    );
  }
}

export default App;
