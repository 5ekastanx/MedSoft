import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaCheckCircle } from 'react-icons/fa';
import '../styles/pages/contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Введите имя';
    if (!formData.email.trim()) {
      newErrors.email = 'Введите email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Некорректный email';
    }
    if (!formData.message.trim()) newErrors.message = 'Введите сообщение';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length === 0) {
      console.log('Форма отправлена:', formData);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content2">
            <h1>Свяжитесь с нами</h1>
            <p>Мы всегда рады ответить на ваши вопросы</p>
          </div>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="section-title">
                <span className="title-decoration"></span>
                Контактная информация
              </h2>
              
              <div className="info-item">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-text">
                  <h3>Адрес</h3>
                  <p>г. Ош, ул. Медицинская, 15</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <FaPhoneAlt />
                </div>
                <div className="info-text">
                  <h3>Телефон</h3>
                  <a href="tel:+996990998877">+996 (990) 99-88-77</a>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div className="info-text">
                  <h3>Email</h3>
                  <a href="mailto:medsoft@example.com">medsoft@example.com</a>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <FaClock />
                </div>
                <div className="info-text">
                  <h3>Часы работы</h3>
                  <p>Пн-Пт: 8:00 - 18:00</p>
                  <p>Сб: 9:00 - 15:00</p>
                </div>
              </div>

              <div className="map-container">
                <iframe 
                  title="Офис MedSoft"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2d72.123456!3d40.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDA3JzI0LjQiTiA3MsKwMDcnMjQuNCJF!5e0!3m2!1sen!2skg!4v1234567890123!5m2!1sen!2skg"
                  width="100%" 
                  height="300" 
                  style={{border:0}} 
                  allowFullScreen="" 
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            
            <div className="contact-form-container">
              <h2 className="section-title">
                <span className="title-decoration"></span>
                Напишите нам
              </h2>
              
              {isSubmitted ? (
                <div className="success-message">
                  <FaCheckCircle className="success-icon" />
                  <h3>Спасибо за ваше сообщение!</h3>
                  <p>Мы свяжемся с вами в ближайшее время.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Ваше имя *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? 'error' : ''}
                      placeholder="Иван Иванов"
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? 'error' : ''}
                        placeholder="example@mail.com"
                      />
                      {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="phone">Телефон</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+996 (___) __-__-__"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Сообщение *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? 'error' : ''}
                      placeholder="Ваше сообщение..."
                    ></textarea>
                    {errors.message && <span className="error-message">{errors.message}</span>}
                  </div>
                  
                  <button type="submit" className="btn btn-primary">
                    Отправить сообщение
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;