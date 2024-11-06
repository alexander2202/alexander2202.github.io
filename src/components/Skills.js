import React from 'react';

const Skills = ({ language }) => {
  
  const skills = ['Programming languages:',
    'C#',
    'Delphi',
    'JS',
    'Python',
    'GoLang (go)',
    '\n',
    'fullstack:',
    '\n',
    'backend:',
    'C#',
    '.Net Core 5,6',
    '.NetFramework 4.7',
    'Dapper',
    'NHibernate',
    'Entity Framework (EF, EFCore)',
    'Linq',
    'multithreaded (asynchronous) programming',
    'Newtonsoft.Json',
    '\n',
    'frontend:',
    'Javascript (JS)',
    'jQuery',
    'React / Redux',
    'Vue 2,3',
    '\n',
    'Databases:',
    'postgres (postgreSQL)',
    'oracle',
    'MSSQL',
    'MongoDB',
    'Redis',
    'Mysql',
    'elasticsearch',
    'firebird',
    '\n',
    'CI/CD:',
    'TeamCity',
    'Gitlab',
    'Jenkins',
    '\n',
    'Message Queues:',
    'Rabbit',
    'eventBus',
    '\n',
    'Monitoring:',
    'ELK Kibana',
    'New Relic',
    'Zabbix',
    '\n',
    'Documentation:',
    'Confluence',
    'XWiki',
    '\n',
    'Development methodologies:',
    'Scrum',
    'Agile'];

  return (
    <section>
      <h2>{language === 'ru' ? 'Навыки' : 'Skills'}</h2>
      <ul>
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;