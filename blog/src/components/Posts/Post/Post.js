import React from 'react';
import classes from './Post.css'


const Post = props => {
  console.log(props)
  return (
    
      <div className={classes.Posts} >
      <div className={classes.TitleDelete}>
        <h3 className={classes.Title}>Title: {props.title}</h3>
        <button className={classes.Dlt}>X</button>
      </div>
        <h4 className={classes.Post} >Post:<br/> {props.post}</h4>
      </div>
  );
};


export default Post;
