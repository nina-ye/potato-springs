import React from 'react';
import HappyPotato from './assets/happy-potato.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={HappyPotato} className="happy-potato" alt="logo" />
        <p>
          Run `yarn storybook` to see the different animated potato components!
        </p>
        <a
          className="App-link"
          href="https://www.react-spring.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          react-spring library
        </a>
      </header>
    </div>
  );
}

export default App;
