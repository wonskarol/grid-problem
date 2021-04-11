import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { randomInput } from "./utils/randomInput";
import { Neighbors } from "./utils/Neighbors";

const input = randomInput(4);
const neighbors = new Neighbors(input);
console.log(input, neighbors.getNeighbors(3, 0));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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

export default App;
