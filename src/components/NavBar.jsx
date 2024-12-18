import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Assuming you'll add some CSS styling here

const NavBar = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/blogs" className="nav-link">Blogs</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default NavBar;
