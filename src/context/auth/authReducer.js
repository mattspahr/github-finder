import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, USER_LOADED } from '../types';

export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        token: action.payload.getAccessToken().getJwtToken(),
        isAuthenticated: true,
        loading: false,
        username: action.payload.accessToken.payload.username
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.getAccessToken().getJwtToken(),
        isAuthenticated: true,
        username: action.payload.accessToken.payload.username,
        loading: false
      };
    case LOGIN_FAILURE:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        username: null,
        error: action.payload
      };
    default:
      return state;
  }
};
