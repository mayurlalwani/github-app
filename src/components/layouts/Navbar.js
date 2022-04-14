import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar">
      <h1>
        <Link to="/">{title}</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
