import React from "react";
// import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "#fff"
  };

  return (
    <nav>
      <Link style={navStyle} to="/">
        <h1>Logo</h1>
      </Link>
      <ul className="nav-links">
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
        <Link
          style={navStyle}
          to={{ pathname: "/shop", search: "?page=2&per_page=3" }}
        >
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
