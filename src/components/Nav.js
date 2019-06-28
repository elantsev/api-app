import React from "react";
// import "./App.css";
import { NavLink } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "#fff",
    padding: "20px"
  };

  return (
    <nav>
      <NavLink exact style={navStyle} to="/">
        <h1>Logo</h1>
      </NavLink>
      <ul className="nav-links">
        <li>
          <NavLink style={navStyle} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            style={navStyle}
            to={{ pathname: "/shop", search: "?page=2&per_page=3" }}
          >
            Shop
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
