import React from 'react';

const CountryPopulation = ({ population }) => {
  return (
    <div>
      <h2>Country Population</h2>
      <p data-testid="population">Population: {population}</p>
    </div>
  );
};

export default CountryPopulation;
