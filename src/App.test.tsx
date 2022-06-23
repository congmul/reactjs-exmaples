import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders REACT STARTKIT', () => {
  // 1) Rendering the component we want to test on Virtual DOM
  render(<App />);
  // 2) finding the elements
  const linkElement = screen.getByText(/REACT STARTKIT/i);
  // 3) Assertion
  expect(linkElement).toBeInTheDocument();
});
