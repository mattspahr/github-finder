import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Login = props => {
  const authContext = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { login, onLoad, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
  }, [error, isAuthenticated, props.history]);

  useEffect(() => {
    onLoad();
  }, [error, isAuthenticated, props.history]);

  const onSubmit = event => {
    event.preventDefault();
    login({ username, password });
  };

  return (
    <div className='form-container'>
      <h1>Sign-In</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor='username'>Username</label>
        <div className='form-group'>
          <input
            type='text'
            name='username'
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
        </div>
        <label htmlFor='password'>Password</label>
        <div className='form-group'>
          <input
            type='password'
            name='password'
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </div>
        <input
          type='submit'
          value='Sign-In'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  );
};

export default Login;
