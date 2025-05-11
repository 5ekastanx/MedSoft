import React from 'react';
import DoctorCard from '../components/DoctorCard';
import '../styles/pages/doctors.css';
import doctor1 from '../assets/doctor1.jpg'
import doctor2 from '../assets/doctor2.jpg'
import doctor3 from '../assets/doctor3.jpg'

const DoctorsPage = () => {
  const doctors = [
    {
      id: 1,
      name: "Иванова Анна Петровна",
      specialty: "Терапевт",
      experience: "15 лет",
      education: "КГМА, 2005",
      photo: doctor1,
      schedule: "Пн-Пт: 8:00-16:00",
      services: ["Консультации", "Диагностика", "Лечение"]
    },
    {
      id: 2,
      name: "Петров Владимир Сергеевич",
      specialty: "Хирург",
      experience: "12 лет",
      education: "МГМУ, 2008",
      photo: doctor2,
      schedule: "Вт-Сб: 9:00-17:00",
      services: ["Операции", "Консультации", "Реабилитация"]
    },
    {
      id: 3,
      name: "Сидорова Елена Михайловна",
      specialty: "Педиатр",
      experience: "10 лет",
      education: "РНИМУ, 2010",
      photo: doctor3,
      schedule: "Пн-Ср-Пт: 10:00-15:00",
      services: ["Детские болезни", "Вакцинация", "Профилактика"]
    }
  ];

  return (
    <div className="doctors-page">
      <section className="doctors-hero">
        <div className="container">
          <h1>Наши врачи</h1>
          <p>Профессионалы с большим опытом работы</p>
        </div>
      </section>

      <section className="doctors-list">
        <div className="container">
          <div className="doctors-grid">
            {doctors.map(doctor => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorsPage;