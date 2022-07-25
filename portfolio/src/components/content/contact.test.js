import { render, screen } from '@testing-library/react';
import Contact from './Contact';

it('renders heading on page', () => {
  render(<Contact />);
  const linkElement = screen.getByTestId('contact-header');
  expect(linkElement).toHaveTextContent('Contact');
});
