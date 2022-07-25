import { render, screen } from '@testing-library/react';
import App from './App';

it('renders heading on page', () => {
  render(<App />);
  const linkElement = screen.getByTestId('heading-portfolio')
  expect(linkElement).toHaveTextContent('Welcome To My Personal Portfolio!');
});

it('renders NavBar on page', () => {
  render(<App />);

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
})
