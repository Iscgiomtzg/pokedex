import React from "react";

import "./styles.css";
import PokeImage from "./PokeImage/PokeImage";
import PokeDetails from "./PokeDetails/PokeDetails";

class Pokedex extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="leftCover" />
        <PokeImage />
        <PokeDetails />
      </div>
    );
  }
}
export default Pokedex;
