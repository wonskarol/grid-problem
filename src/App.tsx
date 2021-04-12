import React from "react";

import "./App.css";

import { randomInput } from "./utils/randomInput";
import { Grid } from "./components/Grid";

const size = 10;
const input = randomInput(size);

function App() {
  return (
    <div className="App">
      <Grid input={input} size={size} />
    </div>
  );
}

export default App;
