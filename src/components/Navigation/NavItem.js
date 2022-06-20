import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavItem.css';


const NavItem = ({ path, icon, name, closeHamburger }) => {
  return (
    <li className='nav-item' onClick={closeHamburger}>
      <Link to={path} className='link'>
        <FontAwesomeIcon icon={icon} className='nav-item-icon' />
        {/* {' '} */}
        {name}
      </Link>
    </li>
  )
};
export default NavItem;
