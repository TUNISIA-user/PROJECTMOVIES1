import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="conatiner">
        <div className="logo">
          <Link to="/">Movies </Link>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/">Watch LIst</NavLink>
          </li>

          <li>
            <NavLink to="/Watched">Watched</NavLink>
          </li>
          <li>
            <NavLink to="/Add" className="btn">
              Add
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
