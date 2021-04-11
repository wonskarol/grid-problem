import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { randomInput } from "./utils/randomInput";
import { Grid } from "./components/Grid";

const size = 8;
const input = randomInput(size);

function App() {
  return (
    <div className="App">
      <Grid input={input} size={size} />
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
