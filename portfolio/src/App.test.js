import { render, screen } from '@testing-library/react';
import App from './App';

it('renders heading on page', () => {
  render(<App />);
  const linkElement = screen.getByTestId('welcome-header');
  expect(linkElement).toHaveTextContent('Welcome To My Personal Portfolio!');
});

it('renders NavBar on page', () => {
  render(<App />);

  const navbar = screen.getByTestId('navbar');

  expect(navbar).toBeInTheDocument();
});

it('renders sections on page', () => {
  render(<App />);

  const aboutMe = screen.getByTestId('about-me-header');
  expect(aboutMe).toBeInTheDocument('About Me');

  const experience = screen.getByTestId('experience-header');
  expect(experience).toBeInTheDocument();

  const projects = screen.getByTestId('projects-header');
  expect(projects).toBeInTheDocument();

  const techStacks = screen.getByTestId('tech-stacks-header');
  expect(techStacks).toBeInTheDocument();

  const contact = screen.getByTestId('contact-header');
  expect(contact).toBeInTheDocument();
});
