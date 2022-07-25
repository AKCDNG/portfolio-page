import { render, screen } from '@testing-library/react';
import TechStacks from './TechStacks';

it('renders tech stacks on page', () => {
  render(<TechStacks />);
  const linkElement = screen.getByTestId('tech-stacks-header');
  expect(linkElement).toHaveTextContent('Tech Stacks');
});
