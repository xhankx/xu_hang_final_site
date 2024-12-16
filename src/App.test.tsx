import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/welcome to my portfolio/i); // Replace with actual text
  expect(headingElement).toBeInTheDocument();
});
