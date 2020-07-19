<<<<<<< HEAD
import React, { useState } from 'react';

import Navbar from './containers/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { getCurrentUser } from './services/auth.service';
import Profile from './pages/Profile';
import MyItem from './pages/MyItem';


function App() {
  const [auth, setAuth] = useState(getCurrentUser());

  return (
    <React.Fragment>
      <Router>
        <Navbar isAuth={auth !== null} setAuth={setAuth} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {auth === null && (
            <>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/login">
                <Login setAuth={setAuth} />
              </Route>
            </>
          )}
          {auth !== null && (
            <>
              <Route path="/items">
                <MyItem userId={auth.id} />
              </Route>
              <Route path="/profile">
                <Profile userId={auth.id} />
              </Route>
            </>
          )}
        </Switch>
      </Router>
    </React.Fragment>
=======
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> b0b7464dc4f9e1e248b7fa34d2528a9604d3e16e
  );
}

export default App;
