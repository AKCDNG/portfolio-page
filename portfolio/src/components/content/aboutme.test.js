import { render, screen } from '@testing-library/react';
import AboutMe from './AboutMe';

it('renders heading on page', () => {
  render(<AboutMe />);
  const linkElement = screen.getByTestId('about-me-header');
  expect(linkElement).toHaveTextContent('About Me');
});
