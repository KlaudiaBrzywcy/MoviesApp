import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faStar,
  faHome,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { faImdb } from "@fortawesome/free-brands-svg-icons";
import { CgCloseR } from "react-icons/cg";
import NavItem from "./NavItem";
import "./Navbar.css";

const HamburgerMenu = () => {
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);

  const handleHamburger = () => {
    setHamburgerOpen(!isHamburgerOpen);
  };
  return (
    <nav className="nav-container mobile">
      {!isHamburgerOpen ? (
        <div className="hamburger-header-container">
          <div className="nav-logo">
            <span className="imdb-icon-span">
              <FontAwesomeIcon icon={faImdb} />
            </span>{" "}
            Movies App
          </div>
          <div className="hamburger-icon" onClick={handleHamburger}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      ) : (
        <div className="hamburger-header-container">
          <div className="nav-logo">
            <span className="imdb-icon-span">
              <FontAwesomeIcon icon={faImdb} />
            </span>{" "}
            Movies App
          </div>
          <div className="hamburger-icon" onClick={handleHamburger}>
            <CgCloseR />
          </div>
        </div>
      )}

      {isHamburgerOpen && (
        <div className="nav-items-container">
          <ul className="nav-ul">
            <NavItem
              path={"/"}
              icon={faHome}
              name="Home"
              closeHamburger={handleHamburger}
            />
            <NavItem
              path={"/search"}
              icon={faSearch}
              name="Search"
              closeHamburger={handleHamburger}
            />
            <NavItem
              path={"/top"}
              icon={faStar}
              name="TOP Movies"
              closeHamburger={handleHamburger}
            />
          </ul>
        </div>
      )}
    </nav>
  );
};

export default HamburgerMenu;
