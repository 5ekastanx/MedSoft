import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/navbar.css';

const Navbar = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/services">Услуги</Link></li>
        <li><Link to="/doctors">Врачи</Link></li>
        <li><Link to="/contact">Контакты</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;