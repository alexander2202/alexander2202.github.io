import React from 'react';

const About = ({ language }) => {
    let about = [];

    let aboutRu = ['Основной профиль — backend',
        'также имеется опыт работы с frontend (jQuery, react, vue).',
        'Общий опыт разработки на С# — 5 лет, из них 3 года — коммерческий опыт.',
        
        'Основной опыт:',
        'веб-приложения (api-запросы, асинхронное программирование);',
        'работа с базами данных (как написания sql-скриптов, так и работа с ORM; code-first, database-first);',
        'анализ логов (Elastic, NewRelic);',
        'сопровождение и доработка микросервисов.',
        'Работал как по Scrum, так и по Agile.',
        
        'Занимался проектированием и созданием отдельных модулей, контроллеров, API-запросов, хендлеров межсервисного взаимодействия (eventBus).',
        
        'Знаком с системами версионности проектов (Git/TFS).',
        
        'Работал с документацией (Confluence, XWiki, Yaml). Писал как статьи по работе отдельных модулей или функций, так и подробно описывал/редкатировал документацию по API.',
        
        'Из интересных задач, с которым приходилось сталкиваться:',
        'создание приложения, взаимодействующего с api Amazon AWS S3;',
        'разработка одного из типов датасетов как структурной единицы для сайта knoema.com;',
        'перенос кода с NetFramework 4.7 на NET 5, который запускал расчёты через COM-объекты в приложение Merak от компании Schlumberger.'];

    let aboutEn = ['My main profile is backend,',
        'also has experience with frontend (jQuery, react, vue).',
        'Total experience in C# development - 5 years, 3 of them - commercial experience.',
        
        'Main experience:',
        'Web applications (api queries, asynchronous programming);',
        'working with databases (both writing sql scripts and working with ORM; code-first, database-first);',
        'log analysis (Elastic, NewRelic);',
        'maintenance and revision of microservices.',
        'Worked in both Scrum and Agile.',
        
        'I was involved in designing and creating separate modules, controllers, API requests, handlers of inter-service interaction (eventBus).',
        
        'Familiar with project versioning systems (Git/TFS).',
        
        'Worked with documentation (Confluence, XWiki, Yaml). I\'ve written both articles on the work of individual modules or functions and detailed/revised API documentation.',
        
        'Among the interesting tasks encountered:',
        'Creating an application interoperable with Amazon AWS S3 api;',
        'development of one type of dataset as a structural unit for knoema.com;',
        'porting code from NetFramework 4.7 to NET 5 that ran calculations through COM objects in the Merak application from Schlumberger.'];

    about = language === 'ru' ? aboutRu : aboutEn;

    
  return (
    <section>
      <h2>{language === 'ru' ? 'О себе' : 'About Me'}</h2>
      <ul>
        {about.map(aboutItem => (
          <li key={aboutItem}>{aboutItem}</li>
        ))}
      </ul>
    </section>
  );
};

export default About;