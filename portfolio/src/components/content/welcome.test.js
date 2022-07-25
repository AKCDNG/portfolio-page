import { render, screen } from '@testing-library/react';
import Welcome from './Welcome';

it('renders projects on page', () => {
  render(<Welcome />);
  const linkElement = screen.getByTestId('welcome-header');
  expect(linkElement).toHaveTextContent('Welcome To My Personal Portfolio!');
  
});
