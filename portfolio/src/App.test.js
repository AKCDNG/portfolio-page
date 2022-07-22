import { render, screen } from '@testing-library/react';
import App from './App';

test('renders heading on page', () => {
  render(<App />);
  const linkElement = screen.getByRole('heading');
  expect(linkElement).toHaveTextContent('My Portfolio');
});
