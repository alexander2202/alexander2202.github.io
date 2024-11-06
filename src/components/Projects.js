// src/components/Projects.js
import React from 'react';

const Projects = ({ language }) => {
    const projects = [
        {
          title: language === 'ru' ? 'Low-code платформа Visary' : 'Visary Low-code platform',
          description: language === 'ru' 
            ? 'Уникальное платформенное решение для построения сложных и защищенных информационно-аналитических систем, соответствующих всем требованиями ФСБ, ФСТЭК и Минобороны России.' 
            : 'A unique platform solution for building complex and secure information and analytical systems that meet all the requirements of the Federal Security Service, FSTEC and the Russian Ministry of Defense.',
          link: 'https://npc.ba/visary'
        },
        {
          title: language === 'ru' ? 'Knoema' : 'Knoema',
          description: language === 'ru' 
            ? 'Единая платформа для обнаружения, управления и визуализации данных независимо от технических знаний' 
            : 'One Platform for Data Discovery, Management and Visualization, Regardless of Technical Expertise',
          link: 'http://knoema.com/'
        },
        {
          title: language === 'ru' ? 'Торговая платформа UTIP' : 'Trading platform UTIP',
          description: language === 'ru' 
            ? 'Платформа для торгов на рынке Forex. Включает в себя CRM, кабинет трейдера и прочие компоненты.' 
            : 'A platform for trading on the Forex market. Includes CRM, trader\'s cabinet and other components.',
          link: 'https://www.utip.ru/'
        },
        {
          title: language === 'ru' ? 'МИС Полимед' : 'MIS Polymed',
          description: language === 'ru' 
            ? 'Медицинская информационная система, которая работает как с базой пациентов, так и с их анамнезами и записями на приём. Содержит медицинские справочники.' 
            : 'A medical information system that handles both the patient base, patient history and appointment records. Contains medical directories.',
          link: 'https://polimed-soft.ru/'
        }
      ];
    
      return (
        <section>
          <h2>{language === 'ru' ? 'Проекты' : 'Projects'}</h2>
          <ul>
            {projects.map(project => (
              <li key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link}>{language === 'ru' ? 'Ссылка на проект' : 'Link to project'}</a>
              </li>
            ))}
          </ul>
        </section>
    );
};

export default Projects;