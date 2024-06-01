import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Top', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/Top .* Tours/);
  expect(linkElement.length).toBeGreaterThan(0);
});
