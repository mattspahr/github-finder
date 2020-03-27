import React, { useState, useContext, useEffect } from 'react';
import UserPool from '../../config/UserPool';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = event => {
    event.preventDefault();

    UserPool.signUp(username, password, [], null, (err, data) => {
      if (err) console.log(err);
      console.log(data);
    });
  };

  return (
    <div className='form-container'>
      <h1>Sign-Up</h1>
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
          value='Sign-Up'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  );
};

export default Register;
