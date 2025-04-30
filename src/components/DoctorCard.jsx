import React from 'react';
import '../styles/components/card.css';

const DoctorCard = ({ name, specialty, experience, photo }) => {
  return (
    <div className="doctor-card">
      <img src={`/assets/${photo}`} alt={name} />
      <h3>{name}</h3>
      <p><strong>Специальность:</strong> {specialty}</p>
      <p><strong>Опыт работы:</strong> {experience}</p>
    </div>
  );
};

export default DoctorCard;