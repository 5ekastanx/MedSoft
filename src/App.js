import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import DoctorsPage from './pages/DoctorsPage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/main.css';

function App() {
  return (
    <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/contacts" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
    </div>
  );
}

export default App;