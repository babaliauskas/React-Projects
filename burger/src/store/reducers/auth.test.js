import reducer from './auth';
import * as actionTpes from '../actions/actionTypes';

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: '/'
    });
  });

  it('should store the token upon login', () => {
      expect(reducer({
        token: null,
        userId: null,
        error: null,
        loading: false,
        authRedirectPath: '/'
      }, {
          type: actionTpes.AUTH_SUCCESS,
          idToken: 'some-token',
          userId: 'some-userId'
      })).toEqual({
        token: 'some-token',
        userId: 'some-userId',
        error: null,
        loading: false,
        authRedirectPath: '/'
      })
  })
});
