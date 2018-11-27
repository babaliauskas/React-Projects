import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import Post from './Post/Post'

export class Posts extends Component {
  componentDidMount = () => {
    this.props.onFetchPosts()
  }

  render() {
    let posts = this.props.posts.map(post => {
      return (
        <Post key={post.id} {...post} />
      //   <div key={post.id}>
      //   <h4>{post.title}</h4>
      //   <h6>{post.post}</h6>
      // </div>
      )
    })
    return (
      <div>
        {posts}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts
})

const mapDispatchToProps = dispatch =>  ({
  onFetchPosts: () => dispatch(actions.fetchPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
