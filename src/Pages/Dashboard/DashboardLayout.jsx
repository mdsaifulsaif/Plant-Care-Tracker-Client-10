import React, { useState } from "react";
import {
  FaBars,
  FaHome,
  FaLeaf,
  FaPlus,
  FaUser,
  FaTimes,
} from "react-icons/fa";
import { Link, Outlet } from "react-router";

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen  ">
      {/* Sidebar */}
      <aside
        className={`bg-green-700 text-white w-64 p-4 space-y-4 h-full z-50 transform ${
          open ? "translate-x-0 fixed" : "-translate-x-full fixed"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static`}
      >
        {/* Mobile Close Icon */}
        <div className="flex justify-between items-center lg:hidden mb-4">
          <Link to="/">
            <h1 className="text-xl font-bold">🌿 Ninja</h1>
          </Link>
          <button onClick={() => setOpen(false)}>
            <FaTimes className="text-2xl" />
          </button>
        </div>

        {/* Desktop Logo */}
        <Link to="/" className="hidden lg:block">
          <h1 className="text-2xl hover:text-green-300 font-bold mb-6">
            🌿 Ninja
          </h1>
        </Link>

        {/* Navigation */}
        <nav className="flex flex-col gap-2">
          <Link
            to="/dashboard"
            className="flex items-center gap-2 p-2 rounded hover:bg-green-600"
          >
            <FaHome /> Home
          </Link>
          <Link
            to="/dashboard/all-plants"
            className="flex items-center gap-2 p-2 rounded hover:bg-green-600"
          >
            <FaLeaf /> All Plants
          </Link>
          <Link
            to="/dashboard/add-plant"
            className="flex items-center gap-2 p-2 rounded hover:bg-green-600"
          >
            <FaPlus /> Add Plant
          </Link>
          <Link
            to="/dashboard/yourplants"
            className="flex items-center gap-2 p-2 rounded hover:bg-green-600"
          >
            <FaUser /> My Plants
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen">
        {/* Mobile Topbar */}
        <div className="lg:hidden  bg-green-600 text-white p-4 flex items-center justify-between">
          <button onClick={() => setOpen(true)}>
            <FaBars className="text-2xl" />
          </button>
          <Link to="/">
            {" "}
            <span className="text-lg font-semibold">Ninja</span>
          </Link>
        </div>

        {/* Main Page Content */}
        <main className="flex-1 w-full   overflow-y-auto   px-5 py-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
