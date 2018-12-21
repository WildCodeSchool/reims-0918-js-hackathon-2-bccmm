import React from "react";
import "./Header.css";

const Header = () => (
  <div className="wrap">
    <h1 id="cmyk">
      <span className="blue">S</span>
      <span className="orange">A</span>
      <span className="blue">I</span>
      <span className="orange">N</span>
      <span className="blue">T</span>
      <span className="orange">-</span>
      <span className="blue">E</span>
      <span className="orange">X</span>
    </h1>
    <img
      src="http://chaire-idis.fr/wp-content/uploads/2016/02/saintex.jpg"
      style={{
        position: "absolute",
        height: "200px",
        left: "20px",
        top: "30px"
      }}
    />
  </div>
);

export default Header;
