import { render } from '@testing-library/react';
import App from './App';

test('contains the game class', () => {
  const { container } = render(<App />);
  expect(container.classList.contains('game')).toBe(true);
});
