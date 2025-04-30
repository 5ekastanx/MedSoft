import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/header.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo">
        <Link to="/">MedSoft</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/services">Услуги</Link></li>
          <li><Link to="/doctors">Врачи</Link></li>
          <li><Link to="/contacts">Контакты</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;