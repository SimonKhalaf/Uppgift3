import React from 'react';
import fetch from 'isomorphic-unfetch';

const RegionsPage = ({ regions, countries }) => {
  console.log('Regions:', regions);
  console.log('Countries:', countries);

  return (
    <div>
      <h2>List of Regions</h2>
      <ul>
        {regions.map((region) => (
          <li key={region}>
            <h3>{region}</h3>
            <ul>
              {countries
                ?.filter((country) => country.region === region || !country.region)
                ?.map((country) => (
                  <li key={country.cca2}>{country.name?.common || 'Unknown Country'}</li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  try {
    console.log('Fetching regions data...');
    const response = await fetch('https://restcountries.com/v3.1/all');
    const countries = await response.json();

    const regions = [];
    countries.forEach((country) => {
      if (!regions.includes(country.region)) {
        regions.push(country.region);
      }
    });

    console.log('Fetched regions data:', regions);

    return {
      props: {
        regions: regions.filter(Boolean),
        countries,
      },
    };
  } catch (error) {
    console.error('Error fetching regions data:', error);
    return {
      props: {
        regions: [],
        countries: [],
      },
    };
  }
}

export default RegionsPage;
