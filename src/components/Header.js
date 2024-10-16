import './Header.css';
import React, { useState } from "react";


const Header = () => {
 const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const handleSearchClick = () => {
    setIsSearchExpanded(!isSearchExpanded); // Toggle search box expansion
  };
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li>
            <a href="/cpu" onClick={handleCpuClick}>CPU</a>
          </li>
          <li>
            <a href="/gpu" onClick={handleGpuClick}>GPU</a>
          </li>
          <li>
            <a href="/laptop" onClick={handleLaptopClick}>Laptop</a>
          </li>
          <li>
            <a href="/user" onClick={handleUserClick}>Login/Signup</a>
          </li>
        </ul>
      </nav>

        <div className={`search-container ${isSearchExpanded ? 'expanded' : ''}`}>
           <input
             type="text"
             placeholder="Search..."
             className="search-box"
             onFocus={handleSearchClick}
             onBlur={() => setIsSearchExpanded(false)} // Collapse on blur
           />
           <button className="search-button">Search</button>
         </div>
    </header>
  );
};

const handleCpuClick = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('./api/cpu/all');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching CPU data:', error);
    }
};

const handleGpuClick = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('./api/gpu/all');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching CPU data:', error);
    }
};

const handleLaptopClick = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('./api/laptop/all');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching CPU data:', error);
    }
};


const handleUserClick = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://api.example.com/cpu');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching CPU data:', error);
    }
};


export default Header;
