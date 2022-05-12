import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NavItem = ({ path, icon, name }) => {
  return (
    <li className='nav-item'>
      <Link to={path} >
        <FontAwesomeIcon icon={icon} />
        {/* {' '} */}
        {name}
      </Link>
    </li>
  )
};
export default NavItem;
