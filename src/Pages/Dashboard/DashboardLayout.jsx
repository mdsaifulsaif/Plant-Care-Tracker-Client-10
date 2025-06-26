import React, { useState } from "react";
import { FaBars, FaHome, FaLeaf, FaPlus, FaUser } from "react-icons/fa";
import { Link, Outlet } from "react-router"; // ✅ fixed import

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar (fixed always) */}
      <aside
        className={`bg-green-700 text-white w-64 p-4 space-y-4 fixed h-full z-50 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0`}
      >
        <Link to="/">
          {" "}
          <h1 className="text-2xl hover:text-green-300 font-bold mb-6">
            🌿 Dashboard
          </h1>
        </Link>
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
      <div className="flex-1 flex flex-col h-screen lg:ml-64">
        {/* Mobile Topbar */}
        <div className="lg:hidden bg-green-600 text-white p-4 flex items-center justify-between">
          <button onClick={() => setOpen(!open)}>
            <FaBars className="text-2xl" />
          </button>
          <span className="text-lg font-semibold">Plant Dashboard</span>
        </div>

        {/* Scrollable Page Content */}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
