import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Post.css'

const Post = props => {
  console.log(props)
  return (
    <Link to={`/edit/${props.id}`} className={classes.Post}>
      <div>
        <h4>{props.title}</h4>
        <h6>{props.post}</h6>
      </div>
    </Link>
  );
};

export default Post;
