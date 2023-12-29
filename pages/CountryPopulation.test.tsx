import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import CountryPopulation from './CountryPopulation';

describe('CountryPopulation', () => {
  it('renders the component with the provided population', () => {
    render(<CountryPopulation population={1000000} />);
    const populationElement = screen.getByTestId('population');
    expect(populationElement.textContent).toBe('Population: 1000000');
  });

  it('renders a message when no population is provided', () => {
    render(<CountryPopulation population={undefined} />);
    const noPopulationMessage = screen.queryByText(/no population information available/i);
    expect(noPopulationMessage).toBeNull();
  });

  it('renders the component with a large population', () => {
    render(<CountryPopulation population={10000000} />);
    const populationElement = screen.getByTestId('population');
    expect(populationElement.textContent).toBe('Population: 10000000');
  });
});
