import './Header.css';
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Jiwoong Choi</div>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="hire-me">Hire Me</button>
    </header>
  );
};

export default Header;
