import { render, screen } from '@testing-library/react';
import Experience from './Experience';

it('renders experience on page', () => {
  render(<Experience />);
  const linkElement = screen.getByTestId('experience-header');
  expect(linkElement).toHaveTextContent('Experience');
});
