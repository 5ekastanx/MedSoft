import React from 'react';
import DoctorCard from '../components/DoctorCard';
import '../styles/pages/doctors.css';

const DoctorsPage = () => {
  const doctors = [
    {
      name: "Иванова А.П.",
      specialty: "Терапевт",
      experience: "15 лет",
      photo: "doctor1.jpg"
    },
    {
      name: "Петров В.С.",
      specialty: "Хирург",
      experience: "10 лет",
      photo: "doctor2.jpg"
    }
  ];

  return (
    <div className="doctors-page">
      <h1>Наши специалисты</h1>
      <div className="doctors-grid">
        {doctors.map((doctor, index) => (
          <DoctorCard key={index} {...doctor} />
        ))}
      </div>
    </div>
  );
};

export default DoctorsPage;