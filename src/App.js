import './App.css';
import { HomeScreen, GameScreen } from './more-ui-components';

import React, { useEffect, useState } from 'react';
import { Amplify, Auth, Hub } from 'aws-amplify';
import awsconfig from './aws-exports';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

Amplify.configure(awsconfig);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
        case 'cognitoHostedUI':
          getUser().then(userData => setUser(userData));
          break;
        case 'signOut':
          setUser(null);
          break;
        case 'signIn_failure':
        case 'cognitoHostedUI_failure':
          console.log('Sign in failure', data);
          break;
      }
    });

    getUser().then(userData => setUser(userData));
  }, []);

  function getUser() {
    return Auth.currentAuthenticatedUser()
      .then(userData => userData)
      .catch(() => console.log('Not signed in'));
  }

  return (
    <Router>
      <div className='App'>
        <div>
          {user ? (
            <div>
              <div className='App-header'>
                <Routes>
                  <Route path='/new-game' element={<GameScreen />} />
                  <Route path='/' element={<HomeScreen />} />
                </Routes>
              </div>
            </div>
          ) : (
            <button onClick={() => Auth.federatedSignIn()}>Federated Sign In</button>
          )}
        </div>
      </div>
    </Router>
  );

  return (
    <Router>
      <div className='App'>
        <div>
          {user ? (
            <div>
              <div className='App-header'>
                <button onClick={() => Auth.signOut()}>Sign Out</button>
                <p>User: {user ? JSON.stringify(user.attributes) : 'None'}</p>
              </div>
              <div className='App-header'>
                <Link to="/">Home</Link>
                <Link to="/new-game">New Game</Link>
              </div>
            </div>
          ) : (
            <button onClick={() => Auth.federatedSignIn()}>Federated Sign In</button>
          )}
        </div>

        <Routes>
          <Route path="/new-game">
            <GameScreen />
          </Route>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;