import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ToggleTheme from '../components/ToggleTheme'
import { FiHome, FiPlusCircle, FiLogOut } from 'react-icons/fi';
 
function Navigation({ logout, name }) {
  return (
    <nav className="navigation">
      <ul className="button">
      <li><ToggleTheme /></li>
      <li><Link to="/"><FiHome /></Link></li>
        <li><Link to="/add"><FiPlusCircle /></Link></li>
        <li><button onClick={logout}>{name} <FiLogOut /></button></li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
 
export default Navigation;