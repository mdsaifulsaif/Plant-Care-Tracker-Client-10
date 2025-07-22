import React, { useContext, useState } from "react";
import { AuthContext } from "../authProvider/authProvider";

export default function ProfileWithLogout() {
  const { user, handleLogOut } = useContext(AuthContext);
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative inline-block">
      {/* Profile Image */}
      <img
        src="https://via.placeholder.com/50" // Replace with user's image URL
        alt="User"
        className="w-12 h-12 rounded-full border-2 border-green-500 cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />

      {/* Logout Button */}
      {hovered && (
        <button
          onClick={handleLogOut}
          className="absolute left-[-17px] transition-all  bottom-[-40px] bg-green-600 text-white px-4 py-2 rounded-md shadow-lg whitespace-nowrap"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Logout
        </button>
      )}
    </div>
  );
}
