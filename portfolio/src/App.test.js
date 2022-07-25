import { render, screen } from '@testing-library/react';
import App from './App';

it('renders heading on page', () => {
  render(<App />);
  const linkElement = screen.getByTestId('heading-portfolio')
  expect(linkElement).toHaveTextContent('Welcome To My Personal Portfolio!');
});

it('renders NavBar on page', () => {
  render(<App />);

  const navbar = screen.getByTestId('navbar');

  expect(navbar).toBeInTheDocument();
})
