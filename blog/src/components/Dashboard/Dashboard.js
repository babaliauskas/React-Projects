import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import Header from '../Header/Header'
import classes from './Dashboard.css'
import Post from '../Posts/Posts'

class Dashboard extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    console.log(this.props.posts)
    // let posts = this.props.posts.map(post => {
    //   return (
    //     <div key={post.title}>  </div>
    //   )
    // })
    return (
      <div className={classes.Dashboard}>
          <Header />
          <NavLink to='/create'> Create </NavLink>
          <Post />
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  posts: state
})

export default connect(mapStateToProps)(Dashboard)
