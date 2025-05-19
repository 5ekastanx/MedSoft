// New file: src/pages/Course.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft, FaClock, FaStar, FaUserMd, FaFileAlt } from 'react-icons/fa';
import '../styles/pages/course.css';

export const CoursePage = () => {
  const { id } = useParams();
  
  // Mock course data - in a real app, you'd fetch this from an API
  const courses = {
    1: {
      title: "Основы первой помощи для начинающих",
      description: "Этот курс предназначен для людей без медицинского образования, которые хотят научиться оказывать первую помощь в экстренных ситуациях.",
      duration: "2 часа",
      level: "Начинающий",
      rating: "4.9",
      image: "course-basic.jpg",
      lessons: [
        {
          title: "Введение в первую помощь",
          duration: "15 мин",
          type: "видео"
        },
        {
          title: "Алгоритм действий при ЧС",
          duration: "20 мин",
          type: "видео"
        },
        {
          title: "Практическое задание: Оценка ситуации",
          duration: "30 мин",
          type: "практика"
        },
        {
          title: "Тест по основам первой помощи",
          duration: "15 мин",
          type: "тест"
        }
      ]
    },
    2: {
      title: "Сердечно-легочная реанимация (СЛР)",
      description: "Подробный курс по проведению сердечно-легочной реанимации для взрослых и детей с использованием современных методик.",
      duration: "3 часа",
      level: "Продвинутый",
      rating: "4.8",
      image: "course-cpr.jpg",
      lessons: [
        {
          title: "Основы СЛР",
          duration: "20 мин",
          type: "видео"
        },
        {
          title: "Техника проведения СЛР",
          duration: "30 мин",
          type: "видео"
        },
        {
          title: "Практическое занятие: СЛР на манекене",
          duration: "45 мин",
          type: "практика"
        },
        {
          title: "Особенности СЛР у детей",
          duration: "25 мин",
          type: "видео"
        }
      ]
    }
  };

  const course = courses[id] || courses[1];

  return (
    <div className="course-page">
      <div className="course-header">
        <div className="container">

          <div className="course-meta">
            <span className="course-duration"><FaClock /> {course.duration}</span>
            <span className="course-level">{course.level}</span>
            <span className="course-rating"><FaStar /> {course.rating}</span>
          </div>
          <h1>{course.title}</h1>
          <p className="course-description">{course.description}</p>
          <button className="btn btn-primary">
            Начать обучение
          </button>
        </div>
      </div>

      <div className="course-content container">
        <div className="course-lessons">
          <h2>Программа курса</h2>
          <div className="lessons-list">
            {course.lessons.map((lesson, index) => (
              <div key={index} className="lesson-item">
                <div className="lesson-number">{index + 1}</div>
                <div className="lesson-info">
                  <h3>{lesson.title}</h3>
                  <div className="lesson-meta">
                    <span>{lesson.duration}</span>
                    <span className="lesson-type">{lesson.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="course-sidebar">
          <div className="sidebar-card">
            <h3><FaUserMd /> Преподаватель</h3>
            <div className="instructor">
              <img src="/images/instructor.jpg" alt="Преподаватель" />
              <div>
                <h4>Доктор Иванова А.П.</h4>
                <p>Врач скорой помощи, 15 лет опыта</p>
              </div>
            </div>
          </div>

          <div className="sidebar-card">
            <h3><FaFileAlt /> Материалы</h3>
            <ul className="materials-list">
              <li>Памятка по первой помощи</li>
              <li>Алгоритмы действий</li>
              <li>Тестовые задания</li>
              <li>Сертификат об окончании</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};