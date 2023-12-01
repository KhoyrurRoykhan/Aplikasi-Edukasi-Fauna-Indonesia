import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/appbar/appbar.css';
import '../css/appbar/responsive.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const Logout = async () => {
    try {
      await axios.delete('http://localhost:5000/logout');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="app-bar">
      <div className="app-bar__menu">
        <button id="hamburgerButton" onClick={toggleDrawer}>
          ☰
        </button>
      </div>
      <div className="app-bar__brand">
        <a href="/" className="no-underline">
          Edu Fauna / Logo
        </a>
      </div>
      <nav
        id="navigationDrawer"
        className={`app-bar__navigation ${isDrawerOpen ? 'open' : ''}`}
      >
        <ul>
          <li>
            <a href="/home">HOME</a>
          </li>
          <li>
            <a href="/kategori">KATEGORI</a>
          </li>
          <li>
            <a href="/quiz">QUIZ</a>
          </li>
          <li>
            <button onClick={Logout}>LOGOUT</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;