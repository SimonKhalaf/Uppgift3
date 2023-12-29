import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const CountryInfo = ({ countryCode }) => {
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
        const data = await response.json();
        setCountryData(data);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };

    fetchCountryData();
  }, [countryCode]);

  if (!countryData) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{padding: '10px'}}>
      <Link style={{textDecoration: 'none', color: 'white'}} href={`/${countryData[0]?.cca2}`}>
        <div style={{margin: 'auto', width: '20%', backgroundColor: 'green', padding: '10px', borderRadius: '7px',}}>
          View details for {countryData[0]?.name?.common || 'Unknown Country'}
        </div>
      </Link>
    </div>
  );
};

export default CountryInfo;