import React, { useState } from 'react';
import '../styles/components/service-card.css';

const ServiceCard = ({ title, description, icon, features }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`service-card ${isExpanded ? 'expanded' : ''}`}>
      <div 
        className="service-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="service-icon">
          <i className={icon}></i>
        </div>
        <div className="service-title">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="expand-icon">
          <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'}`}></i>
        </div>
      </div>
      
      {isExpanded && (
        <div className="service-features">
          <ul>
            {features.map((feature, index) => (
              <li key={index}>
                <i className="fas fa-check-circle"></i>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <button className="btn btn-small">Подробнее</button>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;