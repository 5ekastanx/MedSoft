import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/home.css';

export const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Инновационные медицинские решения</h1>
            <p className="subtitle">Современное ПО для эффективного управления здравоохранением</p>
            <div className="hero-buttons">
              <Link to="/services" className="btn btn-primary">
                Наши услуги
              </Link>
              <Link to="/contacts" className="btn btn-outline">
                Контакты
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img src={"../assets/home.jpg"} alt="Медицинская иллюстрация" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Наши преимущества</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-laptop-medical"></i>
              </div>
              <h3>Электронные карты</h3>
              <p>Цифровое хранение медицинских данных с защитой конфиденциальности</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-calendar-check"></i>
              </div>
              <h3>Онлайн запись</h3>
              <p>Удобная система записи на прием к врачам в любое время</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Медицинская аналитика</h3>
              <p>Мощные инструменты для анализа здоровья пациентов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>10+</h3>
              <p>Лет опыта</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Клиник</p>
            </div>
            <div className="stat-item">
              <h3>1000+</h3>
              <p>Пациентов</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Поддержка</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};