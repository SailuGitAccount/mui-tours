import React from 'react';
import { render, screen } from '@testing-library/react';
import AppBar from '../AppBar';

test('renders AppBar', () => {
  render(<AppBar />);
  const text = screen.getByText('TOURS');
  expect(text).toBeInTheDocument();
});
