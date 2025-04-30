import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>MedSoft</h3>
          <p>Инновационные решения для здравоохранения</p>
        </div>
        <div className="footer-section">
          <h4>Навигация</h4>
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/services">Услуги</Link></li>
            <li><Link to="/doctors">Врачи</Link></li>
            <li><Link to="/contact">Контакты</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Контакты</h4>
          <p>г. Москва, ул. Медицинская, 15</p>
          <p>+7 (495) 123-45-67</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MedSoft. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;