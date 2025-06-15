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
      <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
        darkMode ? "bg-zinc-900 text-gray-300" : "bg-gray-50 text-black"
      }`}>
        <Header/>
        <main className="flex-grow mt-10 max-w-7xl mx-auto w-[95%]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Layouts;