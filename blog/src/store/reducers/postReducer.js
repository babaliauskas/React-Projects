import * as actionTypes from '../actions/actionTypes';

let initialState = {
  posts: [],
  loading: false
};

const addPostSuccess = (state, action) => {
  const newPost = {
    ...action.postData,
    id: action.id
  };
  return {
    ...state,
    loading: false,
    posts: state.posts.concat(newPost)
  };
};

const addPostFail = (state, action) => ({
  ...state,
  loading: false
});

const startAddPost = (state, action) => ({
  ...state,
  loading: true
});

const fetchPostsStart = (state, action) => ({
  ...state,
  loading: true
});

const fetchPostFail = (state, action) => ({
  ...state,
  loading: false
});

const fetchPostsSuccess = (state, action) => ({
  ...state,
  posts: action.posts,
  loading: false
});

const removePostStart = (state, action) => ({
  ...state,
  loading: true
});

const removePostFail = (state, action) => ({
  ...state,
  loading: false
});

const removePostSuccess = (state, action) => {
  return state.filter(({id}) => id !== action.id);
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_POST_SUCCESS:
      return addPostSuccess(state, action);
    case actionTypes.ADD_POST_FAIL:
      return addPostFail(state, action);
    case actionTypes.START_ADD_POST:
      return startAddPost(state, action);
    case actionTypes.FETCH_POSTS_START:
      return fetchPostsStart(state, action);
    case actionTypes.FETCH_POSTS_FAIL:
      return fetchPostFail(state, action);
    case actionTypes.FETCH_POSTS_SUCCESS:
      return fetchPostsSuccess(state, action);
    case actionTypes.REMOVE_POST_START:
      return removePostStart(state, action);
    case actionTypes.REMOVE_POST_FAIL:
      return removePostFail(state, action);
    case actionTypes.REMOVE_POST_SUCCESS:
      return removePostSuccess(state, action);
    default:
      return state;
  }
};

export default postReducer;
