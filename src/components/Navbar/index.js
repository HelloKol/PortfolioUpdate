import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/Navbar.scss";

export default function index() {
  return (
    <nav className="mt-5">
      <ul className="nav-bar flex justify-between text-xl text-white">
        <a>Color</a>
        <span>
          <a className="mr-10">
            <NavLink to="/" activeClassName="selected" exact={true}>
              home.
            </NavLink>
          </a>
          <a className="mr-10">
            <NavLink to="/s" activeClassName="selected" exact={true}>
              Home
            </NavLink>
          </a>
          <a className="mr-10">
            <NavLink to="/d" activeClassName="selected" exact={true}>
              Home
            </NavLink>
          </a>
          <a>
            <NavLink to="/contacts" activeClassName="selected" exact={true}>
              contact.
            </NavLink>
          </a>
        </span>
      </ul>
    </nav>
  );
}
