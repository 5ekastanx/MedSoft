import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaInstagram, FaTelegram, FaLinkedin } from 'react-icons/fa';
import '../styles/components/footer.css';
import logo from '../assets/favicon.png'

const Footer = () => {
  return (
    <footer className="main-footers">
      <div className="footer-containers">
        <div className="footer-grids">
          <div className="footer-brands">
            <Link to="/" className="logos">
              <span className="logo-icons"><img src={logo} width={74} height={74} alt="" /></span>
              <span className="logo-texts">MedSoft</span>
            </Link>
            <p className="footer-descriptions">
              Инновационные цифровые решения для современного здравоохранения
            </p>
            <div className="social-linkss">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="Telegram"><FaTelegram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
          </div>

          <div className="footer-linkss">
            <h3 className="footer-headings">Навигация</h3>
            <ul className="footer-menus">
              <li><Link to="/">Главная</Link></li>
              <li><Link to="/services">Услуги</Link></li>
              <li><Link to="/doctors">Врачи</Link></li>
              <li><Link to="/courses">Курсы</Link></li>
              <li><Link to="/contact">Контакты</Link></li>
            </ul>
          </div>

          <div className="footer-contactss">
            <h3 className="footer-headings">Контакты</h3>
            <ul className="contact-infos">
              <li>
                <FaMapMarkerAlt className="contact-icons" />
                <span>г. Ош, ул. Медицинская, 15</span>
              </li>
              <li>
                <FaPhone className="contact-icons" />
                <a href="tel:+996990234567">+996 (990) 23-45-67</a>
              </li>
              <li>
                <FaEnvelope className="contact-icons" />
                <a href="mailto:info@medsoft.kg">info@medsoft.kg</a>
              </li>
            </ul>
          </div>


        </div>

        <div className="footer-bottoms">
          <div className="footer-legals">
            <p>&copy; {new Date().getFullYear()} MedSoft. Все права защищены.</p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;