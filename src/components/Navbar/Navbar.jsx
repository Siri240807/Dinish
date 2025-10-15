import React from 'react';
import './Navbar.css';
import { assets } from '../../frontend_assets/assets'; // ✅ Corrected path

import { testVar } from '../../assets/frontend_assets/test';  // ✅ Corrected path
console.log(testVar); // This should log "Hello world" if the import is correct

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="logo" className='logo' />
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile-app</li>
        <li>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="basket" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
