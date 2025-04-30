import React from 'react';
import Button from '../components/button';
import '../styles/pages/contact.css';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Наши контакты</h2>
          
          <div className="contact-item">
            <i className="icon">📍</i>
            <p>г. Ош, ул. Медицинская, 15</p>
          </div>
          
          <div className="contact-item">
            <i className="icon">📞</i>
            <p>+996 (990) 99-88-77</p>
          </div>
          
          <div className="contact-item">
            <i className="icon">✉️</i>
            <p>medsoft@medical-soft.kg</p>
          </div>
          
          <div className="social-links">
            <a href="#" className="social-link">Facebook</a>
            <a href="https://www.instagram.com/5ekastan/" className="social-link">Instagram</a>
            <a href="#" className="social-link">Telegram</a>
          </div>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Напишите нам</h2>
          
          <div className="form-group">
            <label htmlFor="name">Ваше имя</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Иван Иванов" 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="example@mail.com" 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Сообщение</label>
            <textarea 
              id="message" 
              placeholder="Ваше сообщение..." 
              rows="5" 
              required
            ></textarea>
          </div>
          
          <Button type="submit" variant="primary">
            Отправить сообщение
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;