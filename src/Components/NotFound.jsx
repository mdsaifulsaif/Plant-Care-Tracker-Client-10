import React from "react";
import { useNavigate } from "react-router";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-50 px-4">
      <FaExclamationTriangle className="text-green-700 text-6xl mb-4" />
      <h1 className="text-5xl font-bold text-gray-800 mb-2">404</h1>
      <p className="text-xl text-gray-600 mb-6">Oops! Page not found.</p>
      <button
        onClick={() => navigate("/")}
        className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
      >
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;
