import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../../css/Navbar.scss";
import { gsap } from "gsap";

export default function Navbar() {
  let tl = useRef();
  let navbar = useRef();

  useEffect(() => {
    tl = gsap.timeline();
  }, []);

  return (
    <nav className="mt-5">
      <ul
        className="nav-bar flex justify-between text-xl text-white"
        ref={navbar}
      >
        <a>Color</a>
        <span>
          <a className="mr-10">
            <NavLink to="/" activeStyle={{ color: "#7A7A7A" }} exact={true}>
              /home
            </NavLink>
          </a>
          <a className="mr-10">
            <NavLink
              to="/about"
              activeStyle={{ color: "#7A7A7A" }}
              exact={true}
            >
              /about
            </NavLink>
          </a>
          <a className="mr-10">
            <NavLink to="/work" activeStyle={{ color: "#7A7A7A" }} exact={true}>
              /work
            </NavLink>
          </a>
          <a>
            <NavLink
              to="/contact"
              activeStyle={{ color: "#7A7A7A" }}
              exact={true}
            >
              /contact
            </NavLink>
          </a>
        </span>
      </ul>
    </nav>
  );
}
