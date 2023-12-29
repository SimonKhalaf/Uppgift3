import React from 'react';
import fetch from 'isomorphic-unfetch';
import CountryInfo from './CountryInfo';
import Link from 'next/link';

const CountriesList = ({ countries }) => {
  const [selectedCountry, setSelectedCountry] = React.useState('');
  const [selectedRegion, setSelectedRegion] = React.useState('');

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
    setSelectedCountry('');
  };

  const filteredCountries = countries
    ? countries.filter(
        (country) => selectedRegion === '' || country.region === selectedRegion
      )
    : [];

  return (
    <div style={{  margin: '0', textAlign: 'center',}}>
      <h2>List of Countries</h2>
      <div>
        <div>
          <label style={{fontSize: '20px'}}>Select a region:</label>
          <select style={{padding: '5px', border: '1px solid black', borderRadius: '5px', marginLeft: '5px', fontSize: '14px'}} onChange={handleRegionChange} value={selectedRegion}>
            <option value="">All regions</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
        
        <div style={{padding: '18px'}}>
          <Link style={{backgroundColor: 'royalblue', padding: '10px',textAlign: 'center', borderRadius: '7px', textDecoration: 'none', color: 'white'}} href="/regions">Explore Regions</Link>
        </div>
      </div>

      <div>
        <label style={{fontSize: '20px'}}>Select a country:</label>
        <select style={{padding: '5px', border: '1px solid black', borderRadius: '5px', marginLeft: '5px'}} onChange={handleCountryChange} value={selectedCountry}>
          <option value="">Select a country</option>
          {filteredCountries.map((country) => {
            return (
              <option key={country.cca2} value={country.cca2}>
                {country.name?.common || 'Unknown Country'}
              </option>
            );
          })}
        </select>
      </div>
      {selectedCountry && <CountryInfo countryCode={selectedCountry} />}
    </div>
  );
};

export async function getStaticProps() {
  try {
    console.log('Fetching countries data...');
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    console.log('Fetched countries data:', data);

    return {
      props: {
        countries: data,
      },
    };
  } catch (error) {
    console.error('Error fetching countries data:', error);
    return {
      props: {
        countries: [],
      },
    };
  }
}

export default CountriesList;