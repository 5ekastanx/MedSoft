import React from 'react';
import ServiceCard from '../components/ServiceCard';
import '../styles/pages/services.css';

const ServicesPage = () => {
  const services = [
    {
      title: "Электронная регистратура",
      description: "Автоматизация записи пациентов к врачам",
      icon: "📅"
    },
    {
      title: "Электронные медкарты",
      description: "Цифровое хранение медицинских данных",
      icon: "🏥"
    },
    {
      title: "Телемедицина",
      description: "Консультации врачей онлайн",
      icon: "💻"
    }
  ];

  return (
    <div className="services-page">
      <h1>Наши сервисы</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;