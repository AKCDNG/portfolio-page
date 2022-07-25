import { render, screen } from '@testing-library/react';
import Projects from './Projects';

it('renders experience on page', () => {
  render(<Projects />);
  const linkElement = screen.getByTestId('projects-header');
  expect(linkElement).toHaveTextContent('Projects');
});
