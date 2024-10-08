import React, { useState } from "react";
import { close, menu, svrlogo } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const Navbar = ({ toggleTheme, darkMode }) => { // Accept props for theme toggle
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`w-full flex py-6 justify-between items-center navbar ${darkMode ? 'bg-primary text-white' : 'bg-lightPrimary text-black'}`}> {/* Apply theme-based styles */}
      
      {/* Logo */}
      <img src={svrlogo} alt="svr" className="w-[100px] h-[100px]" />

      {/* Desktop Menu */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}>
            <Link to={`/${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar ${darkMode ? 'bg-primary text-white' : 'bg-lightPrimary text-black'}`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}>
                <Link to={`/${nav.id}`} onClick={() => setToggle(false)}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Theme Toggle Button */}
      <button 
        onClick={toggleTheme} 
        className={`ml-4 p-2 rounded-lg ${darkMode ? 'bg-lightPrimary text-black' : 'bg-primary text-white'}`}>
        {darkMode ? "🌞" : "🌙"}
      </button>
    </nav>
  );
};

export default Navbar;
