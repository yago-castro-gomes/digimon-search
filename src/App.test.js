import { render, screen } from '@testing-library/react';
import App from './App';

test('Test DigimonInitial', () => {
  render(<App />);
  const btnDigivice = screen.getByRole('button', {
    name: /digivice/i,
  });
  expect(btnDigivice).toBeInTheDocument();
});
