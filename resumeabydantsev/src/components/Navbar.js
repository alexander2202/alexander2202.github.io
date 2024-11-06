import React from 'react';
import Header from './Header.js';
import './Navbar.css'; // Создадим файл стилей для Navbar

const Navbar = ({ onLanguageChange, language }) => {

    return (
        <nav className="navbar">
            <Header language={language} />
            <button className="contact-button" onClick={onLanguageChange}>
                {language === 'ru' ? 'English' : 'Русский'}
            </button>
        </nav>
    );
};

export default Navbar;