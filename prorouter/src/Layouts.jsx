import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { ThemeProvider, useTheme } from "./ThemeContext";

function Layouts() {
  return (
    <ThemeProvider>
      <LayoutContent />
    </ThemeProvider>
  );
}

function LayoutContent() {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className={darkMode ? "bg-zinc-900 text-gray-300" : "bg-gray-50 text-black"}>
        <Header />
        <div className="mt-6 mb-6 px-1 ">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Layouts;