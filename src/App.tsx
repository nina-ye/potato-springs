import React from "react";
import { SproutingPotato } from "./components/SproutingPotato";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SproutingPotato duration={500} />
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
