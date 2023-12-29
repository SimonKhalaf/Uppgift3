import React from 'react';

const CountryBorders = ({ borders }) => {
  if (!borders || borders.length === 0) {
    return <p>No bordering countries available</p>;
  }

  return (
    <div>
      <h2>Bordering Countries</h2>
      <ul>
        {borders.map((border, index) => (
          <li key={index}>{border}</li>
        ))}
      </ul>
    </div>
  );
};

export default CountryBorders;
