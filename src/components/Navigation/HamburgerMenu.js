import React, {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars, faStar, faHome, faSearch} from "@fortawesome/free-solid-svg-icons";
import {faImdb} from "@fortawesome/free-brands-svg-icons";
import {CgCloseR} from "react-icons/cg"
import NavItem from "./NavItem";
import './Navbar.css'; 

const HamburgerMenu = () => {

    const [isHamburgerOpen, setHamburgerOpen] = useState(false)

    const openHamburger = () => {
       if(isHamburgerOpen === false) {
        setHamburgerOpen(true)
       } else {
        setHamburgerOpen(false)
       }   
    }

    const closeHamburger = () => setHamburgerOpen(false);
       

   
    return (
        
        <nav className="nav-container mobile">
            {!isHamburgerOpen?
            <div className="hamburger-header-container">
            <div className="nav-logo"><span className="imdb-icon-span"><FontAwesomeIcon icon={faImdb} /></span> Movies App</div>    
            <div className="hamburger-icon" onClick={openHamburger}><FontAwesomeIcon icon={faBars}/></div>
            </div>
            :
            <div className="hamburger-header-container">
             <div className="nav-logo"><span className="imdb-icon-span"><FontAwesomeIcon icon={faImdb} /></span> Movies App</div>    
            <div className="hamburger-icon" onClick={openHamburger}><CgCloseR/></div>
            </div>
            }
            
            {isHamburgerOpen &&
            <div className="nav-items-container">
                <ul className="nav-ul">
                    <NavItem path={"/"} icon={faHome} name='Home' closeHamburger={closeHamburger}/>
                    <NavItem path={"/search"} icon={faSearch} name='Search' closeHamburger={closeHamburger}/>
                    <NavItem path={"/top"} icon={faStar} name='TOP Movies' closeHamburger={closeHamburger}/>
                </ul>
            </div> 
            }
           
        </nav>
    )
}

export default HamburgerMenu;