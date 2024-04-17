import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Spin as Hamburger } from 'hamburger-react';
import Logo from "./img/icon.png";

import './navbar.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="cont">
        <div className="logo">
          <NavLink to="/">
            <img src={Logo} alt="Logo" />
          </NavLink>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/researchs">Researches</NavLink>
            </li>
            <li>
              <NavLink to="/surveys">Surveys</NavLink>
            </li>
            <li>
              <NavLink to="/Interviews">Interviews</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
