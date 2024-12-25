/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code>HELLO KIKA! WELCOME</code> 
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
  );
}

export default App;*/




import React from 'react';
import './App.css';
import PlayersList from './PlayersList';

function App() {
  return (
    <div className="App">
      <h1>Football Players</h1>
      <PlayersList />
    </div>
  );
}

export default App;
