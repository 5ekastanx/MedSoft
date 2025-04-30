import React from 'react';
import Button from '../components/button';
import '../styles/pages/home.css';

export const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Инновационные решения для здравоохранения</h1>
        <p>Современное ПО для улучшения работы медицинских учреждений</p>
        <div className="hero-actions">
          <Button variant="primary">Узнать больше</Button>
        </div>
      </section>
      
      <section className="features">
        <h2>Наши преимущества</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>Электронные медкарты</h3>
            <p>Удобное хранение и доступ к медицинским данным</p>
          </div>
          <div className="feature">
            <h3>Онлайн-запись</h3>
            <p>Запись к врачу в несколько кликов</p>
          </div>
          <div className="feature">
            <h3>Аналитика</h3>
            <p>Мониторинг показателей здоровья</p>
          </div>
        </div>
      </section>
    </div>
  );
};
