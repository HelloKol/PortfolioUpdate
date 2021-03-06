import { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import "../../css/Navbar.scss";

export default function Navbar() {
  let tl = useRef();

  useEffect(() => {
    tl = gsap.timeline();
    tl.to(
      ".desktop-nav-bar span a",
      {
        duration: 0.5,
        opacity: 1,
        stagger: {
          amount: 0.5,
        },
      },
      "-=0.5"
    ).to(".desktop-nav-bar .moon", {
      duration: 1,
      opacity: 1,
    });
  }, []);

  return (
    <>
      <nav className="mt-5 sm:block hidden">
        <ul className="desktop-nav-bar flex justify-between text-xl text-white">
          <NavLink to="/" exact={true}>
            <div class="moon"></div>
          </NavLink>
          <span>
            <a className="mr-10">
              <NavLink to="/" activeStyle={{ color: "#ec7263" }} exact={true}>
                /home
              </NavLink>
            </a>
            <a className="mr-10">
              <NavLink
                to="/work"
                activeStyle={{ color: "#ec7263" }}
                exact={true}
              >
                /projects
              </NavLink>
            </a>
            <a>
              <NavLink
                to="/contact"
                activeStyle={{ color: "#ec7263" }}
                exact={true}
              >
                /contact
              </NavLink>
            </a>
          </span>
        </ul>
      </nav>

      <div class="mobile-navbar block sm:hidden z-50">
        <input id="toggle" type="checkbox" />

        <label class="toggle-container" for="toggle">
          <span class="button button-toggle"></span>
        </label>

        <nav class="nav">
          <a class="nav-item">
            <NavLink to="/" exact={true}>
              Home
            </NavLink>
          </a>
          <a class="nav-item">
            <NavLink to="/work" exact={true}>
              Projects
            </NavLink>
          </a>
          <a class="nav-item">
            <NavLink to="/contact" exact={true}>
              Contact
            </NavLink>
          </a>
        </nav>
      </div>
    </>
  );
}
