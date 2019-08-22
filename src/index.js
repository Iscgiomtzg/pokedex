import React from "react";
import ReactDOM from "react-dom";
import Pokedex from "./components";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Pokedex />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
