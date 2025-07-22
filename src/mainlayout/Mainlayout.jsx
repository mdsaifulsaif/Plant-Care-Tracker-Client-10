import React, { useState } from "react";
import Navber from "../Components/Navber";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

function Mainlayout() {
  const [theme, setTheme] = useState("light"); // default theme

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <div data-theme={theme} className="  overflow-x-hidden ">
      <Navber toggleTheme={toggleTheme} currentTheme={theme}></Navber>
      <div className="md:w-6x mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Mainlayout;
