import React from 'react';
import ServiceCard from '../components/ServiceCard';
import '../styles/pages/services.css';
import { FaLaptopMedical, FaMobileAlt, FaShieldAlt, FaChartLine } from 'react-icons/fa';

const ServicesPage = () => {
  const services = [
    {
      title: "Электронная регистратура",
      description: "Инновационная система записи пациентов с искусственным интеллектом для оптимального распределения нагрузки",
      icon: <FaLaptopMedical />,
      features: [
        "Онлайн-запись 24/7 через сайт или мобильное приложение",
        "Автоматические SMS и email-напоминания",
        "Персональный кабинет с историей посещений",
        "Интеграция с календарями (Google, Outlook)",
        "Система рейтинга врачей"
      ],
      benefits: [
        "Сокращение очередей на 70%",
        "Удобство для пациентов",
        "Оптимизация нагрузки врачей"
      ]
    },
    {
      title: "Электронные медкарты",
      description: "Цифровая система хранения медицинских данных с криптографической защитой",
      icon: <FaShieldAlt />,
      features: [
        "Доступ из любой точки мира",
        "Полная история болезни с 18 лет",
        "Прикрепление результатов анализов и снимков",
        "Электронные рецепты с QR-кодами",
        "Экспорт данных в международные форматы"
      ],
      benefits: [
        "Снижение бумажного документооборота",
        "Быстрый доступ к истории болезни",
        "Совместимость с другими клиниками"
      ]
    },
    {
      title: "Телемедицина",
      description: "Комплексные решения для дистанционного наблюдения и консультирования",
      icon: <FaMobileAlt />,
      features: [
        "Видеоконсультации в HD-качестве",
        "Защищенный чат с врачом",
        "Удаленный мониторинг показателей",
        "Онлайн-диагностика по фото/видео",
        "Интеграция с медицинскими гаджетами"
      ],
      benefits: [
        "Экономия времени пациентов",
        "Доступ к специалистам из любой точки",
        "Снижение нагрузки на клиники"
      ]
    },
    {
      title: "Медицинская аналитика",
      description: "Система анализа данных для прогнозирования и профилактики заболеваний",
      icon: <FaChartLine />,
      features: [
        "Персонализированные рекомендации",
        "Прогнозирование рисков заболеваний",
        "Анализ эпидемиологической ситуации",
        "Интеграция с исследовательскими центрами",
        "Автоматические отчеты для врачей"
      ],
      benefits: [
        "Раннее выявление заболеваний",
        "Снижение затрат на лечение",
        "Повышение качества обслуживания"
      ]
    }
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <div className="hero-content2">
            <h1>Медицинские сервисы нового поколения</h1>
            <p className="subtitle2">Инновационные технологии для вашего здоровья и комфорта</p>
            <div className="stats3">
              <div className="stat-item3">
                <span>100%</span>
                <p>Безопасность данных</p>
              </div>
              <div className="stat-item3">
                <span>24/7</span>
                <p>Доступность сервисов</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-list">
        <div className="container">
          <div className="section-header">
            <h2>Наши решения для пациентов и врачей</h2>
            <p className="section-description">
              Комплексные цифровые продукты, прошедшие сертификацию Минздрава
            </p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                benefits={service.benefits}
              />
            ))}
          </div>

          <div className="integration-section">
            <h3>Интеграция с популярными сервисами</h3>
            <div className="integration-logos">
              <img src="../assets/google-health-logo.png" alt="Google Health" />
              <img src="../assets/apple-health-logo.png" alt="Apple Health" />
              <img src="../assets/fitbit-logo.png" alt="Fitbit" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;