import React from 'react';

const Header = ({ language }) => {
  return (
    <header>
      <h1>{language === 'ru' ? 'Александр Быданцев' : 'Aleksandr Bydantsev'}</h1>
      <h2>{language === 'ru' ? 'Fullstack/Backend разработчик' : 'Fullstack/Backend Developer'}</h2>
      <p>{language === 'ru' ? 'Специализация: C#, .Net, js, iQuery, React, Vue, MSSQL, Postgres' : 'Specialization: C#, .Net, js, iQuery, React, Vue, MSSQL, Postgres'}</p>
    </header>
  );
};

export default Header;