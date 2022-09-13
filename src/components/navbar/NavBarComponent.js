import React from "react";
import { Link } from "react-router-dom";

function NavBarComponent() {
  return (
    <div style={{ justifyContent: "space-evenly", display: "flex" }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default NavBarComponent;
