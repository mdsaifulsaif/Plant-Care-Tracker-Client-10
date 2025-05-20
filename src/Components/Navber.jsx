import React, { useState } from "react";
// import logo from "../../assets/logo.png";
import { NavLink } from "react-router"; // Fixed import
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
// import "./header.css";

function Navber() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = (
    <>
      <li>
        <NavLink to="/" className="hover:text-blue-600">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/all-plants" className="hover:text-blue-600">
          All Plants
        </NavLink>
      </li>
      <li>
        <NavLink to="/add-plant" className="hover:text-blue-600">
          Add Plant
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="hover:text-blue-600">
          Login
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="max-w-[1200px] mx-auto py-4 px-5 md:px-0">
      <nav className="flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          {/* <img className="w-[35px]" src="" alt="Phudu Logo" /> */}
          <h3 className="font-bold text-xl">Phudu</h3>
        </div>

        {/* Middle: Nav Links (desktop) */}
        <div className="hidden md:block">
          <ul className="flex gap-6 items-center menus font-medium">
            {navItems}
          </ul>
        </div>

        {/* Right: Emergency Button */}
        <div className="hidden md:block">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-2xl hover:bg-blue-700 transition">
            Emergency
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden z-50" onClick={handleMenu}>
          {menuOpen ? (
            <IoCloseSharp size={30} />
          ) : (
            <FaBarsStaggered size={30} />
          )}
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white border-t shadow-md md:hidden z-40">
            <ul className="flex flex-col menus items-center gap-4 py-5">
              {navItems}
            </ul>
            <div className="text-center pb-5">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-2xl hover:bg-blue-700 transition">
                Emergency
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navber;
