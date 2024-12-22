import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import CodePage from "./components/CodeBlock";

const App = () => {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/code", label: "Code Examples" },
  ];

  return (
    <Router>
      <div>
        {/* Navigation */}
        <nav>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav> 

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/code" element={<CodePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
