import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
	return (
		<nav className='primary-nav'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/users'>Users</NavLink>
		</nav>
	);
}

export default Navbar;
