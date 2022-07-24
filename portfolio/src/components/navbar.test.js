import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

it('Renders Navbar', () => {
  render(<Navbar />);
  const aboutMe = screen.getByText(/About Me/i);
  const experience = screen.getByText(/Experience/i);
  const projects = screen.getByText(/Projects/i);
  const techStacks = screen.getByText(/Tech Stacks/i);
  const contact = screen.getByText(/Contact/i);

  expect(aboutMe).toBeInTheDocument();
  expect(experience).toBeInTheDocument();
  expect(projects).toBeInTheDocument();
  expect(techStacks).toBeInTheDocument();
  expect(contact).toBeInTheDocument();
});
