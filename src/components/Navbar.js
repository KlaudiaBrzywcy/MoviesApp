import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faStar, faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import {faImdb} from "@fortawesome/free-brands-svg-icons";
import NavItem from "./NavItem";

class Navbar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {}
    }

    render () {
        return(
            <nav className="nav-container">
                <div className="nav-logo"><span className="imdb-icon-span"><FontAwesomeIcon icon={faImdb} /></span> Movies App</div>
                <ul>
                    <NavItem path={"/"} icon={faHome} name='Home'/>
                    <NavItem path={"/search"} icon={faSearch} name='Search'/>
                    <NavItem path={"/top"} icon={faStar} name='Top 100'/>
                </ul>
            </nav>
        )
    }

}

export default Navbar;
