import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>AI Code Review</h2>
      </div>
      <div className="navbar-links">
        <a href="https://github.com/devanshukothe/Ai-Code-Reviewer" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
