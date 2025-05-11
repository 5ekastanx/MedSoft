import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaUserMd, FaPhoneAlt } from 'react-icons/fa';
import '../styles/components/header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className='headerc'>
          <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <FaUserMd className="logo-icon" />
            <span>MedSoft</span>
          </Link>
        </div>

        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li className={location.pathname === '/' ? 'active' : ''}>
              <Link to="/">Главная</Link>
            </li>
            <li className={location.pathname === '/services' ? 'active' : ''}>
              <Link to="/services">Услуги</Link>
            </li>
            <li className={location.pathname === '/doctors' ? 'active' : ''}>
              <Link to="/doctors">Врачи</Link>
            </li>
            <li className={location.pathname === '/contacts' ? 'active' : ''}>
              <Link to="/contacts">Контакты</Link>
            </li>
          </ul>

          <div className="header-actions">
            <a href="tel: +996 999 999" className="phone-link">
              <FaPhoneAlt /> +996 999 999
            </a>
            <button className="appointment-button">
              Записаться онлайн
            </button>
          </div>
        </nav>

        <button 
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
    </div>
  );
};

export default Header;