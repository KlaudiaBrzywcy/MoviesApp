import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {faImdb} from "@fortawesome/free-brands-svg-icons"

class Navbar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {} 
    }

    render () {
        return(
            <div className="nav-container">
                <div className="nav-brand"><span className="imdb-icon-span"><FontAwesomeIcon icon={faImdb} /></span> Movies App</div>
                <nav>
                    {/* <NavItem path={} icon={} name='Home'/>
                    <NavItem path={} icon={} name='Search'/>
                    <NavItem path={} icon={} name='Top 100'/> */}
                </nav>
            </div>
        )
    }
     
} 

export default Navbar;