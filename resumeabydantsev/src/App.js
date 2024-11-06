import React, { useState } from 'react';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  const [language, setLanguage] = useState('ru'); // 'ru' - русский, 'en' - английский

  const toggleLanguage = () => {
      setLanguage((prevLang) => (prevLang === 'ru' ? 'en' : 'ru'));
  };

  return (
    <div className="app-container">
      <Navbar onLanguageChange={toggleLanguage} language={language} />
      <About language={language} />
      <Skills language={language} />
      <Projects language={language} />
      <Contact language={language} />
    </div>
  );
};

export default App;