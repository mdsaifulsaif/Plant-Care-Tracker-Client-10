import React, { use, useContext, useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";

import { Link, NavLink } from "react-router"; // Fixed import
import { FaBarsStaggered, FaLeaf } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { AuthContext } from "../authProvider/authProvider";

// tooltip
import { Tooltip } from "react-tooltip";
// import "react-tooltip/dist/react-tooltip.css";
import "react-tooltip/dist/react-tooltip.css";

// import "./header.css";

function Navber() {
  const { user, signOutUser } = useContext(AuthContext);
  const email = user?.email;
  // const email = "hello@gmail.com";
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // LogOut User
  const handleLogOut = () => {
    signOutUser()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
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
        <NavLink to="/add-plant" className="hover:text-green-600">
          Add Plant
        </NavLink>
      </li>
      <li>
        <NavLink to={`/my-plants/${email}`} className="hover:text-green-600">
          My Plants
        </NavLink>
      </li>
      <li></li>
    </>
  );

  const [dark, setDark] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  return (
    <div className="w-11/12  relative mx-auto py-4 px-5  md:px-0   ">
      <nav className="flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          {/* <img className="w-[35px]" src="" alt="Phudu Logo" /> */}
          <FaLeaf className="text-green-600 text-2xl" />
          <h3 className="font-bold hidden md:block text-xl">Ninja</h3>
          <div className="p-4">
            <a
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Click to change theme: Dark or Light"
            >
              <button
                onClick={() => setDark(!dark)}
                className="p-2 rounded bg-green-700 text-white"
                aria-label="Toggle theme"
              >
                {dark ? <FaSun /> : <FaMoon />}
              </button>
            </a>
            <Tooltip id="my-tooltip" />
          </div>
        </div>

        {/* Middle: Nav Links (desktop) */}
        <div className="hidden md:block">
          <ul className="flex gap-6 items-center menus font-medium">
            {navItems}
          </ul>
        </div>

        {/* Right: Emergency Button */}
        <div className=" hidden  md:block">
          {user ? (
            <div className="  group ">
              <div className="  w-[50px] h-[50px] flex items-center justify-center rounded-full border-2 border-green-600 mr-3">
                {user.photoURL ? (
                  <div className="relative group inline-block">
                    <img
                      src={user.photoURL}
                      alt="user"
                      className="w-12 h-12 rounded-full border-2 border-green-600"
                    />

                    <div className="absolute left-[-80px] top-1/2 -translate-y-1/2 w-max bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                      {user.displayName}
                    </div>
                  </div>
                ) : (
                  <FaUserAlt size={30} />
                )}
              </div>
              <button
                onClick={handleLogOut}
                className=" absolute top-16 -right-[200px] hover:text-green-50 group-hover:right-1  bg-green-600 text-white text-sm px-3 py-2 rounded-sm"
              >
                Logi Out
              </button>
            </div>
          ) : (
            <div>
              <Link
                to="/login"
                className="hover:text-green-50 bg-green-600 text-white px-3 py-2 rounded-sm"
              >
                Login
              </Link>
            </div>
          )}
        </div>

        {/* for mobile menu  */}

        <div className="flex items-center gap-2 md:hidden">
          {user ? (
            <div className="flex items-center gap-2">
              <div>
                <img src="" alt="user" />
              </div>
              <div>
                <button
                  onClick={handleLogOut}
                  className="bg-green-700 px-2 py-2"
                >
                  LogOut
                </button>
              </div>
            </div>
          ) : (
            <div>
              <Link
                to="/login"
                className="hover:text-green-50 bg-green-600 text-white px-3 py-2 rounded-sm"
              >
                Login
              </Link>
            </div>
          )}
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
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navber;
