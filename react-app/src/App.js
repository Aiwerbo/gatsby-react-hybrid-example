import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Route
    exact path="/react-app/"
    render={() => (
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
        <Link to="/react-app/react-app-page2/">Go to second react page</Link>
      </header>
    </div>
    )}
     />
    <Route
    exact path="/react-app/react-app-page2/"
    render={() => (
      <div>
        <div>
          <Link to="/react-app/">Go to react page 1</Link>
        </div>
        <div>
          <a href="/">Back to gatsby</a>
        </div>
      </div>
    )}
    />
    </BrowserRouter>
  );
}

export default App;
