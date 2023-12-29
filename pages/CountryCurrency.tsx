import React from 'react';

const CountryCurrency = ({ currencies }) => {
  if (!Array.isArray(currencies) || currencies.length === 0) {
    return <p>No currency information available</p>;
  }

  return (
    <div>
      <h2>Country Currency</h2>
      <ul>
        {currencies.map((currency, index) => (
          <li key={index}>Currency: {currency?.name || 'N/A'}</li>
        ))}
      </ul>
    </div>
  );
};

export default CountryCurrency;
