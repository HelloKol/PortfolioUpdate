import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../css/Navbar.scss";

export default function Navbar() {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  let color = {
    color: "#d12e2e",
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
          <div class="moon"></div>
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

      <div onClick={openMobileMenu} className="mobile-nav-bar sm:hidden block">
        <div class="wrapper">
          <div class="icon nav-icon-5">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div className={openMobileNav ? `mobile-nav-container` : "hidden"}>
        <div className="mobile-nav-items">
          <NavLink onClick={openMobileMenu} to="/" activeStyle={color} exact={true}>
            <h1>/home</h1>
          </NavLink>
          <NavLink onClick={openMobileMenu} to="/work" activeStyle={color} exact={true}>
            <h1>/work</h1>
          </NavLink>
          <NavLink onClick={openMobileMenu} to="/contact" activeStyle={color} exact={true}>
            <h1>/contact</h1>
          </NavLink>
        </div>
      </div>
    </>
  );
}
