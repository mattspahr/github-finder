import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NotFound from './components/pages/NotFound';
import PrivateRoute from './components/routing/PrivateRoute';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import AuthState from './context/auth/AuthState';
import './App.css';

const App = () => {
  return (
    <AuthState>
      <GithubState>
        <AlertState>
          <Router>
            <div className='App'>
              <Navbar />
              <div className='container'>
                <Alert />
                <Switch>
                  <Route exact path='/login' component={Login} />
                  <PrivateRoute exact path='/' component={Home} />
                  <PrivateRoute exact path='/user/:login' component={User} />
                  <Route exact path='/about' component={About} />

                  <Route exact path='/register' component={Register} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </div>
          </Router>
        </AlertState>
      </GithubState>
    </AuthState>
  );
};

export default App;
