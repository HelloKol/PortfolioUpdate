import { NavLink } from "react-router-dom";
import "../../css/Navbar.scss";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
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
  }

  return (
    <>
      <nav className="mt-5 sm:block hidden">
        <ul className="nav-bar flex justify-between text-xl text-white">
          <div class="moon"></div>
          <span>
            <a className="mr-10">
              <NavLink to="/" activeStyle={color} exact={true}>
                /home
              </NavLink>
            </a>
            <a className="mr-10">
              <NavLink to="/about" activeStyle={color} exact={true}>
                /about
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

      <div className="mobile-nav-bar sm:hidden block">
        <div class="wrapper">
          <div onClick={openMobileMenu} class="icon nav-icon-5">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
}
