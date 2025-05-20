import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/courses.css';
import { FaClock, FaStar, FaUserShield } from 'react-icons/fa';

const courses = [
  {
    id: 1,
    title: "Основы первой помощи",
    description: "Научитесь оказывать первую помощь в экстренных ситуациях",
    duration: "2 часа",
    level: "Начинающий",
    rating: "4.9",
    students: "1200+",
    image: "course1.jpg",
    instructor: "Иванова А.П."
  },
  {
    id: 2,
    title: "Сердечно-легочная реанимация",
    description: "Освойте современные методики проведения СЛР",
    duration: "3 часа",
    level: "Продвинутый",
    rating: "4.8",
    students: "850+",
    image: "course2.jpg",
    instructor: "Петров В.С."
  },
  {
    id: 3,
    title: "Первая помощь при травмах",
    description: "Алгоритмы действий при различных видах травм",
    duration: "2.5 часа",
    level: "Средний",
    rating: "4.7",
    students: "950+",
    image: "course-trauma.jpg",
    instructor: "Сидорова Е.М."
  },
  {
    id: 4,
    title: "Экстренная педиатрическая помощь",
    description: "Специфика оказания помощи детям в критических ситуациях",
    duration: "3.5 часа",
    level: "Продвинутый",
    rating: "4.9",
    students: "700+",
    image: "course-pediatric.jpg",
    instructor: "Козлова О.И."
  }
];

const Courses = () => {
  return (
    <div className="courses-page2">
      <section className="courses-hero2">
        <div className="container2">
          <h1>Обучающие курсы по медицине</h1>
          <p>Практические знания от ведущих специалистов</p>
        </div>
      </section>

      <section className="courses-list2">
        <div className="container2">
          <div className="courses-grid2">
            {courses.map(course => (
              <div key={course.id} className="course-card2">
                <div className="course-image2">
                  <img src={`../assets/${course.image}`} alt={course.title} />
                  <div className="course-level2">{course.level}</div>
                </div>
                <div className="course-content2">
                  <div className="course-meta2">
                    <span><FaClock /> {course.duration}</span>
                    <span><FaStar /> {course.rating}</span>
                    <span><FaUserShield /> {course.instructor}</span>
                  </div>
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <div className="course-footer2">
                    <span className="students2">{course.students} студентов</span>
                    <Link to={`/courses/${course.id}`} className="btn btn-primary">
                      Подробнее
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;