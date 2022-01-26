import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../css/Navbar.scss";

export default function Navbar() {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  let color = {
    color: "#ec7263",
  };

  function openMobileMenu() {
    const icons = document.querySelectorAll(".icon");
    icons.forEach((icon) => {
      icon.addEventListener("click", (event) => {
        icon.classList.toggle("open");
      });
    });
    setOpenMobileNav((prevState) => !prevState);
  }

  return (
    <>
      <nav className="mt-5 sm:block hidden">
        <ul className="desktop-nav-bar flex justify-between text-xl text-white">
          <NavLink to="/" exact={true}>
            <div class="moon"></div>
          </NavLink>
          <span>
            <a className="mr-10">
              <NavLink to="/" activeStyle={color} exact={true}>
                /home
              </NavLink>
            </a>
            <a className="mr-10">
              <NavLink to="/work" activeStyle={color} exact={true}>
                /work
              </NavLink>
            </a>
            <a>
              <NavLink to="/contact" activeStyle={color} exact={true}>
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
              Work
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
