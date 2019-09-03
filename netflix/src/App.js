import React from 'react';
import routes from './routes';
import Navbar from './components/navbar/Navbar';
import './app.css';

const App = () => (
  <div className="App">
    {routes}
    <Navbar />
  </div>
);

export default App;
