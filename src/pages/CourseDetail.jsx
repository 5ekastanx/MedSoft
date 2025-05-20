import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft, FaClock, FaStar, FaUserMd, FaFileAlt, FaUserShield, FaUsers } from 'react-icons/fa';
import '../styles/pages/course-detail.css';

const courses = {
  1: {
    title: "Основы первой помощи для начинающих",
    description: "Этот курс предназначен для людей без медицинского образования, которые хотят научиться оказывать первую помощь в экстренных ситуациях. Вы освоите базовые алгоритмы действий при различных чрезвычайных ситуациях.",
    duration: "2 часа",
    level: "Начинающий",
    rating: "4.9",
    students: "1200+",
    image: "course1.jpg",
    instructor: {
      name: "Иванова Анна Петровна",
      bio: "Врач скорой помощи высшей категории с 15-летним стажем. Автор методических рекомендаций по первой помощи.",
      image: "doctor1.jpg"
    },
    lessons: [
      {
        title: "Введение в первую помощь",
        duration: "15 мин",
        type: "видео",
        description: "Основные принципы и юридические аспекты оказания первой помощи"
      },
      {
        title: "Алгоритм действий при ЧС",
        duration: "20 мин",
        type: "видео",
        description: "Пошаговая инструкция оценки ситуации и вызова помощи"
      },
      {
        title: "Практическое задание: Оценка ситуации",
        duration: "30 мин",
        type: "практика",
        description: "Тренировка на виртуальных симуляторах"
      },
      {
        title: "Тест по основам первой помощи",
        duration: "15 мин",
        type: "тест",
        description: "Проверка полученных знаний"
      }
    ],
    materials: [
      "Памятка по первой помощи (PDF)",
      "Алгоритмы действий в инфографике",
      "Чек-лист для проверки знаний",
      "Сертификат об окончании курса"
    ]
  },
  2: {
    title: "Сердечно-легочная реанимация (СЛР)",
    description: "Подробный курс по проведению сердечно-легочной реанимации для взрослых и детей с использованием современных методик. Включает VR-тренажеры для отработки навыков.",
    duration: "3 часа",
    level: "Продвинутый",
    rating: "4.8",
    students: "850+",
    image: "course2.jpg",
    instructor: {
      name: "Петров Владимир Сергеевич",
      bio: "Реаниматолог, преподаватель курсов ACLS и BLS, участник международных конференций по неотложной медицине.",
      image: "doctor2.jpg"
    },
    lessons: [
      {
        title: "Основы СЛР",
        duration: "20 мин",
        type: "видео",
        description: "Физиологические основы реанимации"
      },
      {
        title: "Техника проведения СЛР",
        duration: "30 мин",
        type: "видео",
        description: "Правильное положение рук, частота нажатий"
      },
      {
        title: "Практическое занятие: СЛР на манекене",
        duration: "45 мин",
        type: "практика",
        description: "Отработка навыков с обратной связью"
      },
      {
        title: "Особенности СЛР у детей",
        duration: "25 мин",
        type: "видео",
        description: "Отличия в методике для разных возрастных групп"
      }
    ],
    materials: [
      "Руководство по СЛР 2023",
      "Видеоразбор типичных ошибок",
      "Интерактивный тренажер",
      "Сертификат международного образца"
    ]
  },
  3: {
    title: "Первая помощь при травмах",
    description: "Комплексный курс по оказанию помощи при различных видах травм: переломах, ожогах, кровотечениях. Включает работу с реальными кейсами.",
    duration: "2.5 часа",
    level: "Средний",
    rating: "4.7",
    students: "950+",
    image: "course-trauma.jpg",
    instructor: {
      name: "Сидорова Елена Михайловна",
      bio: "Травматолог с 12-летним стажем, специалист по экстремальной медицине, участник спасательных операций.",
      image: "doctor3.jpg"
    },
    lessons: [
      {
        title: "Классификация травм",
        duration: "20 мин",
        type: "видео",
        description: "Виды и степени тяжести травм"
      },
      {
        title: "Остановка кровотечений",
        duration: "30 мин",
        type: "видео+практика",
        description: "Методы временной и окончательной остановки"
      },
      {
        title: "Иммобилизация при переломах",
        duration: "40 мин",
        type: "практика",
        description: "Техники наложения шин"
      },
      {
        title: "Первая помощь при ожогах",
        duration: "25 мин",
        type: "видео",
        description: "Современные подходы к лечению ожогов"
      }
    ],
    materials: [
      "Атлас травм с иллюстрациями",
      "Набор тестовых сценариев",
      "Гайд по аптечке первой помощи",
      "Персональный чек-лист"
    ]
  },
  4: {
    title: "Экстренная педиатрическая помощь",
    description: "Специализированный курс по оказанию неотложной помощи детям. Особое внимание уделено психологической подготовке и работе с родителями.",
    duration: "3.5 часа",
    level: "Продвинутый",
    rating: "4.9",
    students: "700+",
    image: "course-pediatric.jpg",
    instructor: {
      name: "Козлова Ольга Ивановна",
      bio: "Детский реаниматолог, автор учебника по неотложной педиатрии, руководитель центра детской травматологии.",
      image: "doctor1.jpg"
    },
    lessons: [
      {
        title: "Особенности детского организма",
        duration: "25 мин",
        type: "видео",
        description: "Анатомо-физиологические отличия"
      },
      {
        title: "Неотложные состояния у детей",
        duration: "35 мин",
        type: "видео",
        description: "Распознавание критических ситуаций"
      },
      {
        title: "Практикум: Алгоритмы действий",
        duration: "50 мин",
        type: "практика",
        description: "Отработка на педиатрических манекенах"
      },
      {
        title: "Работа с родителями",
        duration: "30 мин",
        type: "видео",
        description: "Коммуникация в стрессовой ситуации"
      }
    ],
    materials: [
      "Педиатрические дозировки",
      "Алгоритмы в формате карточек",
      "VR-симулятор экстренных ситуаций",
      "Сертификат с международной аккредитацией"
    ]
  }
};

export const CourseDetail = () => {
  const { id } = useParams();
  const course = courses[id] || courses[1];

  return (
    <div className="course-page">
      <div className="course-header">
        <div className="container">
          <Link to="/courses" className="back-link">
            <FaArrowLeft /> Все курсы
          </Link>

          <div className="course-meta">
            <span className="course-duration"><FaClock /> {course.duration}</span>
            <span className="course-level">{course.level}</span>
            <span className="course-rating"><FaStar /> {course.rating}</span>
          </div>
          
          <h1>{course.title}</h1>
          <p className="course-description">{course.description}</p>
          
          <div className="course-actions">
            <button className="btn btn-primary">
              Начни обучение
            </button>
          </div>
        </div>
      </div>

      <div className="course-content container">
        <div className="course-lessons">
          <h2><FaFileAlt /> Программа курса</h2>
          <div className="lessons-list">
            {course.lessons.map((lesson, index) => (
              <div key={index} className="lesson-item">
                <div className="lesson-number">{index + 1}</div>
                <div className="lesson-info">
                  <h3><a href="https://www.youtube.com/watch?v=VsuCi1m7-UM&t=1s" >{lesson.title}</a></h3>
                  <p className="lesson-description">{lesson.description}</p>
                  <div className="lesson-meta">
                    <span>{lesson.duration}</span>
                    <span className={`lesson-type ${lesson.type}`}>{lesson.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="course-sidebar">
          <div className="sidebar-card instructor-card">
            <h3><FaUserMd /> Преподаватель</h3>
            <div className="instructor">
              <img src={`../assets/${course.instructor.image}`} alt={course.instructor.name} />
              <div>
                <h4>{course.instructor.name}</h4>
                <p>{course.instructor.bio}</p>
              </div>
            </div>
          </div>

          <div className="sidebar-card materials-card">
            <h3><FaFileAlt /> Материалы курса</h3>
            <ul className="materials-list">
              {course.materials.map((material, index) => (
                <li key={index}>{material}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};