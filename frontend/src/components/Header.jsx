import React, { useState } from 'react';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';
import './Header.css';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <h1>🎬 EntertainmentHub</h1>
        </div>
        
        <nav className={`nav ${showMenu ? 'active' : ''}`}>
          <a href="#home">Home</a>
          <a href="#shows">TV Shows</a>
          <a href="#movies">Movies</a>
          <a href="#new">New & Popular</a>
          <a href="#watchlist">My Watchlist</a>
        </nav>

        <div className="header-actions">
          <div className="search-box">
            <FiSearch />
            <input type="text" placeholder="Search content..." />
          </div>
          <button className="menu-btn" onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
