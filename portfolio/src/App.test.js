import { render, screen } from '@testing-library/react';
import App from './App';

it('renders heading on page', () => {
  render(<App />);
  const linkElement = screen.getByRole('heading');
  expect(linkElement).toHaveTextContent('Welcome To My Personal Portfolio!');
});
