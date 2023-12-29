import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import CountryDetails from './CountryDetails';
import CountryPopulation from './CountryPopulation';
import CountryLanguage from './CountryLanguages';
import CountryFlag from './CountryFlag';
import CountryRegion from './CountryRegion';
import CountryCurrency from './CountryCurrency';
import CountryBorders from './CountryBorders';

const CountryDetailsPage = ({ countryData }) => {
  const router = useRouter();

  if (!countryData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div style={{ cursor: 'pointer', color: 'blue' }}>
        <Link href="/">Back to Main Page</Link>
      </div>

      <CountryDetails country={countryData[0]} />
      <CountryPopulation population={countryData[0]?.population} />
      <CountryLanguage languages={countryData[0]?.languages} />
      <CountryFlag flags={countryData[0]?.flags} />
      <CountryRegion region={countryData[0]?.region} />
      <CountryCurrency currencies={Object.values(countryData[0]?.currencies)} />
      <CountryBorders borders={countryData[0]?.borders} />
    </div>
  );
};

export async function getStaticPaths() {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const countries = await response.json();

  const paths = countries.map((country) => ({
    params: { countryCode: country.cca2 },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${params.countryCode}`);
  const countryData = await response.json();

  return {
    props: {
      countryData,
    },
  };
}

export default CountryDetailsPage;
