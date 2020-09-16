import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/yash/i);
  expect(linkElement).toBeInTheDocument();
});
test("Test I ssuucessful", () => {
  expect(true);
});
