import React from 'react';
import CountryCapital from './CountryCapital';

const CountryDetails = ({ country }) => {
  return (
    <div>
      <CountryCapital capital={country.capital} />
    </div>
  );
};

export default CountryDetails;
