import React from "react";
import ReactDOM from "react-dom";
import Pokedex from "./components";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div class="navbar">
        <a class="active" href="#"><i class="fa fa-fw fa-home"></i> Home</a> 
        <a href="#"><i class="fa fa-fw fa-search"></i> Search</a> 
        <a href="#"><i class="fa fa-fw fa-envelope"></i> Contact</a> 
        <a href="#"><i class="fa fa-fw fa-user"></i> Login</a>
      </div>
      <Pokedex />
      <div className="footer">aasdsadasd</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
