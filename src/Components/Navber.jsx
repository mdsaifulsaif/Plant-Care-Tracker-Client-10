import React, { useContext, useEffect, useState } from "react";
import { FaUserAlt, FaSun, FaMoon } from "react-icons/fa";
import { FaBarsStaggered, FaLeaf } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../authProvider/authProvider";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import Swal from "sweetalert2";

function Navbar() {
  const { user, signOutUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [dark]);

  const handleLogOut = () => {
    signOutUser().catch();
    Swal.fire({
      title: "LogOut successfully!",
      icon: "success",
      iconColor: "#008000",
      confirmButtonColor: "#008000",
      draggable: true,
    });
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
        <NavLink to="/about" className="hover:text-green-600">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/support" className="hover:text-green-600">
          Support
        </NavLink>
      </li>
      {user?.email && (
        <>
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
          <li>
            <NavLink to={`/dashboard`} className="hover:text-green-600">
              Dashboard
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-green-700 py-2  shadow-md">
      <div className="container mx-auto px-4  flex justify-between items-center">
        {/* Left Side for All Devices */}
        <div className="flex items-center gap-2">
          <Link className="flex items-center justify-center gap-2" to="/">
            <FaLeaf className="text-white text-2xl" />
            <h1 className="font-bold text-xl  text-white">Ninja</h1>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center gap-3">
          <button
            className="p-2 rounded bg-green-700 text-white"
            onClick={() => setDark(!dark)}
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>

          <div>
            {user ? (
              <div className="flex items-center gap-2">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="w-10 h-10 rounded-full border-2 border-green-600"
                  />
                ) : (
                  <FaUserAlt size={30} />
                )}

                {/* logout button  */}
                <div className=" ">
                  <button
                    onClick={handleLogOut}
                    className=" bg-green-600 text-white px-2 py-1 rounded-sm"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">
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

          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <IoCloseSharp size={25} className="text-white" />
            ) : (
              <FaBarsStaggered size={25} className="text-white" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 text-white text-green-800 font-medium">
            {navItems}
          </ul>

          <button
            className="p-2 rounded bg-green-700 text-white"
            onClick={() => setDark(!dark)}
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>

          {user ? (
            <div className="relative group">
              {user.photoURL ? (
                <div className="p-4">
                  <a
                    className="mt-5"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={user.displayName}
                  >
                    <img
                      src={user.photoURL}
                      alt="Profile"
                      className="w-10 h-10 cursor-pointer rounded-full border-2 border-green-600"
                    />
                  </a>
                  <Tooltip id="my-tooltip" place="left" />
                </div>
              ) : (
                <FaUserAlt size={30} />
              )}
              <div className="absolute cursor-pointer top-9 right-0 mt-2 hidden group-hover:block">
                <button
                  onClick={handleLogOut}
                  className="bg-green-600 cursor-pointer text-white text-sm px-3 py-2 rounded"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2">
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
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="md:hidden px-4 py-4 bg-white dark:bg-gray-800">
          <ul className="flex flex-col gap-4 text-green-800">{navItems}</ul>
        </div>
      )}
      <Tooltip id="theme-tooltip" />
    </div>
  );
}

export default Navbar;
