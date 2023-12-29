import React from 'react';

const CountryLanguage = ({ languages }) => {
  return (
    <div>
      <h2>Country Language</h2>
      <ul>
        {Object.entries(languages).map(([key, value]: [string, string]) => (
          <li key={key}>Language: {value}</li>
        ))}
      </ul>
    </div>
  );
};

export default CountryLanguage;
