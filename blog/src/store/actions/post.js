import * as actionTypes from './actionTypes';
import axios from 'axios';

export const addPostSuccess = post => ({
  type: actionTypes.ADD_POST_SUCCESS,
  post,
  id: new Date()
});

export const addPostFail = error => ({
  type: actionTypes.ADD_POST_FAIL,
  error
})

export const startAddPost = () => ({
  type: actionTypes.START_ADD_POST
});

export const addPost = postData => {
  return dispatch => {
    dispatch(startAddPost());
    axios
      .post(`https://blog-a71f4.firebaseio.com/posts.json`, postData)
      .then(response => {
        dispatch(addPostSuccess(response.data.name, postData));
      })
      .catch(error => {
        dispatch(addPostFail(error));
      });
  };
};

export const removePostStart = () => ({
  type: actionTypes.REMOVE_POST_START
})

export const removePostSuccess = ({ id }) => ({
  type: actionTypes.REMOVE_POST_SUCCESS,
  id
})

export const removePostFail = error => ({
  type: actionTypes.REMOVE_POST_FAIL,
  error
})

export const removePost = ({ id }) => {
  return dispatch => {
    dispatch(removePostStart())
    axios.delete(`https://blog-a71f4.firebaseio.com/posts/${id}`).then(() => {
      dispatch(removePostSuccess({ id }))
    }).catch(error => dispatch(removePostFail(error)))
  }
}

export const fetchPostsSuccess = posts => ({
  type: actionTypes.FETCH_POSTS_SUCCESS,
  posts
})

export const fetchPostsFail = error => ({
  type: actionTypes.FETCH_POSTS_FAIL,
  error
})

export const fetchPostsStart = () => ({
  type: actionTypes.FETCH_POSTS_START
})

export const fetchPosts = () => {
  return dispatch => {
    dispatch(fetchPostsStart())
    axios.get(`https://blog-a71f4.firebaseio.com/posts.json`).then(response => {
      const fetchedPosts = []
      for (let key in response.data) {
        fetchedPosts.push({
          ...response.data[key],
          id: key
        })
      }
      dispatch(fetchPostsSuccess(fetchedPosts))
    }).catch(error => dispatch(fetchPostsFail(error)))
  }
}