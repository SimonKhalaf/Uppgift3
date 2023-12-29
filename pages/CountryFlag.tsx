import React from 'react';

const CountryFlag = ({ flags }) => {
  console.log('Flags:', flags);

  if (!flags) {
    return <p>No flag available</p>;
  }

  return (
    <div>
      <h2>Country Flag</h2>
      <img src={flags.png} alt={flags.alt} style={{ maxWidth: '100px' }} />
    </div>
  );
};

export default CountryFlag;
