import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Header from '../Header/Header';
import classes from './Dashboard.css';
import Posts from '../Posts/Posts';

class Dashboard extends Component {
  render() {
    return (
      <div className={classes.Dashboard}>
        <Header />
        <div className={classes.CreateDiv}>
          <NavLink className={classes.CreateBtn} to="/create"> Create </NavLink>
        </div>
        <Posts />
      </div>
    );
  }
}
export default Dashboard;
