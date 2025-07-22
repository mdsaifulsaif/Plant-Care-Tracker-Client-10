import React, { useContext, useState } from "react";
import { FaUserAlt, FaSun, FaMoon } from "react-icons/fa";
import { FaBarsStaggered, FaLeaf } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../authProvider/authProvider";
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";

const Navbar = ({ toggleTheme, currentTheme }) => {
  const { user, signOutUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false); // for desktop profile menu

  const handleLogOut = () => {
    signOutUser().catch();
    Swal.fire({
      title: "Logged out successfully!",
      icon: "success",
      iconColor: "#008000",
      confirmButtonColor: "#008000",
    });
    setProfileDropdown(false);
  };

  const navItems = (
    <>
      <li>
        <NavLink to="/" className="hover:text-green-600">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/all-plants" className="hover:text-green-600">
          All Plants
        </NavLink>
      </li>
      <li>
        <NavLink to="/add-plant" className="hover:text-green-600">
          Add Plant
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/my-plants/${user?.email}`}
          className="hover:text-green-600"
        >
          My Plants
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="w-full bg-white dark:bg-gray-900 shadow-md fixed top-0 z-10">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <FaLeaf className="text-green-600 text-2xl" />
          <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">
            Ninja
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 text-green-800 dark:text-gray-200 font-medium">
            {navItems}
          </ul>

          <button
            onClick={toggleTheme}
            className="p-2 bg-green-700 text-white rounded"
          >
            {currentTheme === "light" ? <FaSun /> : <FaMoon />}
          </button>

          {user ? (
            <div className="relative">
              <img
                src={user.photoURL || ""}
                alt="profile"
                onClick={() => setProfileDropdown(!profileDropdown)}
                className="w-10 h-10 rounded-full border-2 border-green-600 cursor-pointer"
              />
              {profileDropdown && (
                <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 border rounded shadow">
                  <button
                    onClick={handleLogOut}
                    className="block px-4 py-2 text-sm text-left text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700 w-full"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-2">
              <Link
                to="/register"
                className="bg-green-600 text-white px-3 py-2 rounded-sm"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="bg-green-600 text-white px-3 py-2 rounded-sm"
              >
                Login
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 bg-green-700 text-white rounded"
          >
            {currentTheme === "light" ? <FaSun /> : <FaMoon />}
          </button>

          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <IoCloseSharp
                size={25}
                className="text-green-800 dark:text-white"
              />
            ) : (
              <FaBarsStaggered
                size={25}
                className="text-green-800 dark:text-white"
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-4 py-4">
          <ul className="flex flex-col gap-4 text-green-800 dark:text-white">
            {navItems}
          </ul>

          {user ? (
            <div className="mt-4 flex items-center gap-3">
              <img
                src={user.photoURL || ""}
                alt="profile"
                className="w-10 h-10 rounded-full border-2 border-green-600"
              />
              <button
                onClick={handleLogOut}
                className="bg-green-600 text-white px-3 py-1 rounded"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="mt-4 flex gap-2">
              <Link
                to="/register"
                className="bg-green-600 text-white px-3 py-2 rounded-sm"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="bg-green-600 text-white px-3 py-2 rounded-sm"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
