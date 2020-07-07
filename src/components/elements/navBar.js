import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

export default function NavBar() {
  return (
    <div className="navBar">
      <Link to="/revolver">
        <li>Revolver</li>
      </Link>
      <Link to="/yellowsub">
        <li>Yellow Submarine</li>
      </Link>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/abbeyroad">
        <li>Abbey Toad</li>
      </Link>
      <Link to="/quiz">
        <li>Beatles Quiz</li>
      </Link>
      <Link to="/card">
        <li>Beatles CardMatch</li>
      </Link>
    </div>
  );
}
