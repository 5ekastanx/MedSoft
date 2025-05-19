import React from 'react';
import DoctorCard from '../components/DoctorCard';
import '../styles/pages/doctors.css';
import doctor1 from '../assets/doctor1.jpg';
import doctor2 from '../assets/doctor2.jpg';
import doctor3 from '../assets/doctor3.jpg';
import { FaStethoscope, FaAward, FaClinicMedical, FaCalendarAlt } from 'react-icons/fa';

const DoctorsPage = () => {
  const doctors = [
    {
      id: 1,
      name: "Иванова Анна Петровна",
      specialty: "Терапевт высшей категории",
      experience: "15 лет практики",
      education: "Кыргызская Государственная Медицинская Академия (2005)",
      photo: doctor1,
      schedule: "Пн-Пт: 8:00-16:00",
      services: [
        "Диагностика и лечение заболеваний",
        "Профилактические осмотры",
        "Ведение хронических больных",
        "Интерпретация анализов"
      ],
      bio: "Специалист с многолетним опытом работы в ведущих клиниках страны. Автор 15 научных публикаций по терапии."
    },
    {
      id: 2,
      name: "Петров Владимир Сергеевич",
      specialty: "Хирург-онколог",
      experience: "12 лет практики",
      education: "Московский Государственный Медицинский Университет (2008)",
      photo: doctor2,
      schedule: "Вт-Сб: 9:00-17:00",
      services: [
        "Лапароскопические операции",
        "Онкологические резекции",
        "Эндоскопическая хирургия",
        "Послеоперационная реабилитация"
      ],
      bio: "Провел более 1000 успешных операций. Владеет современными малоинвазивными методиками."
    },
    {
      id: 3,
      name: "Сидорова Елена Михайловна",
      specialty: "Педиатр, неонатолог",
      experience: "10 лет практики",
      education: "Российский Национальный Исследовательский Медицинский Университет (2010)",
      photo: doctor3,
      schedule: "Пн-Ср-Пт: 10:00-15:00",
      services: [
        "Вакцинация детей",
        "Лечение детских болезней",
        "Наблюдение новорожденных",
        "Развивающая педиатрия"
      ],
      bio: "Специалист по раннему развитию детей. Автор методики адаптации часто болеющих детей."
    }
  ];

  return (
    <div className="doctors-page">
      <section className="doctors-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Наши специалисты</h1>
            <p className="subtitle">Команда профессионалов с многолетним опытом и доказанной эффективностью</p>
            <div className="stats">
              <div className="stat-item">
                <FaAward className="stat-icon" />
                <span>15+ лет средний стаж</span>
              </div>
              <div className="stat-item">
                <FaClinicMedical className="stat-icon" />
                <span>5000+ довольных пациентов</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="doctors-list">
        <div className="container">
          <div className="section-header">
            <h2>
              <FaStethoscope className="section-icon" />
              Врачи клиники
            </h2>
            <p className="section-description">
              Наши специалисты проходят регулярное обучение и используют только современные протоколы лечения
            </p>
          </div>
          
          <div className="doctors-grid">
            {doctors.map(doctor => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>

          <div className="additional-info">
            <div className="info-card">
              <FaCalendarAlt className="info-icon" />
              <h3>Как записаться?</h3>
              <p>Выберите врача, удобное время и получите подтверждение записи на email</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorsPage;