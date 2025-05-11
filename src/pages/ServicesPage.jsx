import React from 'react';
import ServiceCard from '../components/ServiceCard';
import '../styles/pages/services.css';

const ServicesPage = () => {
  const services = [
    {
      title: "Электронная регистратура",
      description: "Полная автоматизация процесса записи пациентов с интеграцией в расписание врачей",
      icon: "fas fa-calendar-alt",
      features: [
        "Онлайн-запись через сайт",
        "SMS-напоминания",
        "Личный кабинет пациента",
        "Интеграция с Google Calendar"
      ]
    },
    {
      title: "Электронные медкарты",
      description: "Цифровое хранение всей медицинской информации с защитой персональных данных",
      icon: "fas fa-file-medical",
      features: [
        "Доступ из любой точки",
        "История обращений",
        "Прикрепление анализов",
        "Электронные рецепты"
      ]
    },
    {
      title: "Телемедицина",
      description: "Проведение консультаций онлайн с функцией видеосвязи",
      icon: "fas fa-video",
      features: [
        "Видеоконсультации",
        "Чат с врачом",
        "Удаленный мониторинг",
        "Онлайн-диагностика"
      ]
    }
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <h1>Наши медицинские сервисы</h1>
          <p>Комплексные решения для цифровизации здравоохранения</p>
        </div>
      </section>

      <section className="services-list">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;