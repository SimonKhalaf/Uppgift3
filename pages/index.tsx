import React from 'react';
import Layout from '../components/Layout';
import CountriesList from './CountriesList';

interface IndexPageProps {
  countries: any[];
}

const IndexPage: React.FC<IndexPageProps> = ({ countries }) => {

  return (
    <Layout>
      <CountriesList countries={countries} />
    </Layout>
  );
};

export async function getStaticProps() {
  try {
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

export default IndexPage;
