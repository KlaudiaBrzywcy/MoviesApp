import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NavItem = ({ path, icon, name }) => {
  return (
    <li className='nav-item'>
      <a href={path} tag={RouterNavLink} exact to={path} >
        <FontAwesomeIcon icon={icon} />
        {/* {' '} */}
        {name}
      </a>
    </li>
  )
};
export default NavItem;