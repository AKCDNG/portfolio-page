import { render, screen } from '@testing-library/react';
import Footer from './footer.jsx';

it('Tests footer', () => {
  render(<Footer />);

  const footerText = screen.getByTestId('footer');
  expect(footerText).toHaveTextContent('Anish Kakaiya')
});
