import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFileMedical, FaHeartbeat, FaUserMd, FaArrowRight, FaStar, FaClock } from 'react-icons/fa';
import '../styles/pages/home.css';

// Компонент карточки курса
const CourseCard = ({ title, duration, level, rating, image }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`course-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="course-image-container">
        <img src={`/images/${image}`} alt={title} className="course-image" />
        <div className="course-level">{level}</div>
      </div>
      <div className="course-content">
        <div className="course-meta">
          <span className="course-duration"> {duration}</span>
          <span className="course-rating"> {rating}</span>
        </div>
        <h3>{title}</h3>
        <button className="btn btn-details">
          Подробнее <FaArrowRight className="arrow-icon" />
        </button>
      </div>
    </div>
  );
};

// Компонент слайдера кейсов
const CaseSlider = ({ cases }) => (
  <div className="case-slider">
    {cases.map((caseItem) => (
      <div key={caseItem.id} className="case-item">
        <div className="case-icon"><FaUserMd /></div>
        <h3>{caseItem.title}</h3>
        <p>{caseItem.description}</p>
        <Link to="https://www.ingos.ru/company/blog/2019/first_aid" className="case-link">
          Читать историю <FaArrowRight />
        </Link>
      </div>
    ))}
  </div>
);



// Данные для курсов
const courses = [
  {
    id: 1,
    title: "Основы первой помощи",
    level: "Начинающий",
    image: "../assets/course1.jpg"
  },
  {
    id: 2,
    title: "Сердечно-легочная реанимация",
    level: "Продвинутый",
    image: "../assets/course2.jpg"
  }
];

// Данные для кейсов
const emergencyCases = [
  {
    id: 1,
    title: "Спасение при ДТП",
    description: "Как правильно оказать помощь при аварии"
  },
  {
    id: 2,
    title: "Первая помощь при инсульте",
    description: "Критически важные первые минуты"
  }
];

// Компонент генератора документов
const DocumentGenerator = () => {
  const [documentType, setDocumentType] = useState('');
  const [documentData, setDocumentData] = useState({
    patientName: '',
    diagnosis: '',
    date: new Date().toISOString().split('T')[0]
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDocumentData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDocumentTypeChange = (e) => {
    setDocumentType(e.target.value);
    // Сбрасываем данные при изменении типа документа
    setDocumentData({
      patientName: '',
      diagnosis: '',
      date: new Date().toISOString().split('T')[0]
    });
  };

  const generateDocument = () => {
    let content = '';
    
    switch(documentType) {
      case 'direction':
        content = `
          <div class="document direction">
            <h3>НАПРАВЛЕНИЕ</h3>
            <p><strong>Пациент:</strong> ${documentData.patientName || '________________'}</p>
            <p><strong>Диагноз:</strong> ${documentData.diagnosis || '________________'}</p>
            <p><strong>Дата:</strong> ${documentData.date}</p>
            <p>Направляется на консультацию к специалисту.</p>
            <div class="signature">Подпись врача: __________</div>
          </div>
        `;
        break;
      case 'certificate':
        content = `
          <div class="document certificate">
            <h3>МЕДИЦИНСКАЯ СПРАВКА</h3>
            <p>Дана ${documentData.patientName || '________________'} в том, что он(а) находился(ась) под медицинским наблюдением.</p>
            <p><strong>Диагноз:</strong> ${documentData.diagnosis || '________________'}</p>
            <p><strong>Дата выдачи:</strong> ${documentData.date}</p>
            <div class="signature">Подпись врача: __________</div>
            <div class="stamp">МП</div>
          </div>
        `;
        break;
      case 'discharge':
        content = `
          <div class="document discharge">
            <h3>ВЫПИСКА ИЗ ИСТОРИИ БОЛЕЗНИ</h3>
            <p><strong>Пациент:</strong> ${documentData.patientName || '________________'}</p>
            <p><strong>Диагноз:</strong> ${documentData.diagnosis || '________________'}</p>
            <p><strong>Дата поступления:</strong> ${documentData.date}</p>
            <p><strong>Дата выписки:</strong> ${new Date().toISOString().split('T')[0]}</p>
            <p><strong>Рекомендации:</strong> соблюдать режим, принимать назначенные препараты.</p>
            <div class="signature">Лечащий врач: __________</div>
          </div>
        `;
        break;
      default:
        content = '<p>Выберите тип документа для генерации</p>';
    }
    
    return { __html: content };
  };

  const handleDownload = () => {
    // В реальном приложении здесь будет логика генерации PDF
    alert('Функция скачивания PDF будет реализована позже');
  };

  return (
    <div className="document-generator">
      <h3><FaFileMedical /> Генератор меддокументов</h3>
      <select 
        value={documentType}
        onChange={handleDocumentTypeChange}
        className="doc-select"
      >
        <option value="">Выберите тип документа</option>
        <option value="direction">Направление</option>
        <option value="certificate">Справка</option>
        <option value="discharge">Выписка</option>
      </select>
      
      {documentType && (
        <>
          <div className="doc-inputs">
            <input
              type="text"
              name="patientName"
              placeholder="ФИО пациента"
              value={documentData.patientName}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="diagnosis"
              placeholder="Диагноз"
              value={documentData.diagnosis}
              onChange={handleInputChange}
              required
            />
            <input
              type="date"
              name="date"
              value={documentData.date}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="doc-preview">
            <h4>Предпросмотр документа</h4>
            <div 
              className="doc-content"
              dangerouslySetInnerHTML={generateDocument()}
            />
            <button 
              className="btn btn-download"
              onClick={handleDownload}
              disabled={!documentData.patientName || !documentData.diagnosis}
            >
              Скачать PDF
            </button>
          </div>
        </>
      )}
    </div>
  );
};

// Компонент теста знаний
const KnowledgeTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  
  const questions = [
    {
      question: "Что делать при остановке сердца?",
      options: [
        "Немедленно начать СЛР",
        "Ждать скорую помощь",
        "Дать воды пострадавшему"
      ],
      correct: 0
    },
    {
      question: "Как остановить артериальное кровотечение?",
      options: [
        "Наложить жгут выше раны",
        "Приложить лед",
        "Наложить повязку"
      ],
      correct: 0
    }
  ];

  return (
    <div className="knowledge-test">
      <h3><FaHeartbeat /> Тест знаний первой помощи</h3>
      <div className="test-progress">
        Вопрос {currentQuestion + 1} из {questions.length}
      </div>
      <div className="test-question">
        <h4>{questions[currentQuestion].question}</h4>
        <div className="test-options">
          {questions[currentQuestion].options.map((option, index) => (
            <button 
              key={index}
              className="test-option"
              onClick={() => {
                if (currentQuestion < questions.length - 1) {
                  setCurrentQuestion(currentQuestion + 1);
                }
              }}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">Новое поколение медтехнологий</div>
            <h1>Профессиональное обучение первой помощи</h1>
            <p>Инновационная платформа с VR-тренажерами и сертифицированными курсами для медицинских работников</p>
            <div className="hero-actions">
              <Link to="/courses" className="btn btn-primary">
                Начать обучение
              </Link>
              <Link to="/quiz" className="btn btn-outline">
                <FaHeartbeat /> Экстренный тест
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="../assets/medical-hero.png" alt="Обучение первой помощи" />
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-value">10 000+</div>
                <div className="stat-label">обученных специалистов</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">98%</div>
                <div className="stat-label">успешных случаев</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Экстренные инструменты */}
  <section className="emergency-tools">
    <div className="container">
      <h2 className="section-title">
        <span className="title-icon"><FaFileMedical /></span>
        Экстренные сервисы
      </h2>
      <div className="tools-grid">
        <DocumentGenerator />
        <div className="emergency-card">
          <h3><FaHeartbeat /> Тест знаний</h3>
          <p>Пройдите тест для проверки ваших знаний по первой помощи</p>
          <Link to="/quiz" className="btn btn-primary">
            Начать тест
          </Link>
        </div>
      </div>
    </div>
  </section>

      {/* Обучающие курсы */}
      <section className="courses">
        <div className="container">
          <h2 className="section-title">
            <span className="title-icon"><FaUserMd /></span>
            Популярные курсы
          </h2>
          <div className="course-grid">
            {courses.map((course) => (
              <CourseCard 
                key={course.id}
                title={course.title}
                duration={course.duration}
                level={course.level}
                rating={course.rating}
                image={course.image}
              />
            ))}
          </div>
          <div className="section-footer">
            <Link to="/courses" className="view-all">
              Смотреть все курсы <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Живые кейсы */}
      <section className="case-studies">
        <div className="container">
          <h2 className="section-title">
            <span className="title-icon"><FaHeartbeat /></span>
            Реальные истории спасения
          </h2>
          <CaseSlider cases={emergencyCases} />
        </div>
      </section>
    </div>
  );
};