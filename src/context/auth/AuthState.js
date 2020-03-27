import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import UserPool from '../../config/UserPool';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, USER_LOADED } from '../types';
import User from '../../components/users/User';

const AuthState = props => {
  const initialState = {
    token: '',
    isAuthenticated: false,
    loading: true,
    username: null,
    error: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = formData => {
    const user = new CognitoUser({
      Username: formData.username,
      Pool: UserPool
    });

    const authDetails = new AuthenticationDetails({
      Username: formData.username,
      Password: formData.password
    });

    user.authenticateUser(authDetails, {
      onSuccess: data => {
        dispatch({ type: LOGIN_SUCCESS, payload: data });
      },
      onFailure: err => {
        dispatch({ type: LOGIN_FAILURE, payload: err });
      }
      // newPasswordRequired: data => {
      //   console.log('newPasswordRequired', data);
      // }
    });
  };

  const onLoad = () => {
    const user = UserPool.getCurrentUser();
    if (user !== null) {
      user.getSession((err, session) => {
        if (session) {
          dispatch({ type: USER_LOADED, payload: session });
        }
      });
    }
  };

  const logout = () => {
    const user = UserPool.getCurrentUser();
    if (user !== null) {
      user.signOut();
      dispatch({ type: LOGOUT });
    }
  };
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        username: state.username,
        error: state.error,
        //register,
        login,
        logout,
        onLoad
        //clearErrors
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
