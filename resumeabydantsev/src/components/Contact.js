import React from 'react';

const Contact = ({ language }) => {
  return (
    <section>
      <h2>{language === 'ru' ? 'Контакты' : 'Contacts'}</h2>
      <p>Telegram: <a href="https://t.me/a_bydantsev">@a_bydantsev</a></p>
      <p>Email: aleksandr_bydantsev@mail.ru</p>
      <p>LinkedIn: <a href="www.linkedin.com/in/abydantsev">www.linkedin.com/in/abydantsev</a></p>
      
    </section>
  );
};

export default Contact;