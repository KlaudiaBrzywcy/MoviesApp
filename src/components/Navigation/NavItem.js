import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavItem.css';


const NavItem = ({ path, icon, name }) => {
  return (
    <li className='nav-item'>
      <Link to={path} className='link'>
        <FontAwesomeIcon icon={icon} className='nav-item-icon' />
        {/* {' '} */}
        {name}
      </Link>
    </li>
  )
};
export default NavItem;
