import React, { useState } from 'react';
import '../styles/components/doctor-card.css';

const DoctorCard = ({ doctor }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="doctor-card">
        <div className="doctor-photo">
          <img src={doctor.photo} alt={doctor.name} />
        </div>
        <div className="doctor-info">
          <h3>{doctor.name}</h3>
          <p className="specialty">{doctor.specialty}</p>
          <p className="experience">
            <i className="fas fa-briefcase-medical"></i> {doctor.experience}
          </p>
        </div>
      </div>

      {showModal && (
        <div className="doctor-modal">
          <div className="modal-overlay" onClick={() => setShowModal(false)}></div>
          <div className="modal-content">
            <button 
              className="modal-close"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <div className="modal-body">
              <div className="modal-photo">
                <img src={doctor.photo} alt={doctor.name} />
              </div>
              <div className="modal-info">
                <h3>{doctor.name}</h3>
                <p className="specialty">{doctor.specialty}</p>
                
                <div className="modal-details">
                  <div className="detail-item">
                    <i className="fas fa-graduation-cap"></i>
                    <span>{doctor.education}</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-briefcase-medical"></i>
                    <span>Опыт: {doctor.experience}</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-clock"></i>
                    <span>График: {doctor.schedule}</span>
                  </div>
                </div>

                <div className="modal-services">
                  <h4>Услуги:</h4>
                  <ul>
                    {doctor.services.map((service, index) => (
                      <li key={index}>
                        <i className="fas fa-check"></i>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="btn btn-primary btn-block">
                  Записаться на прием
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DoctorCard;