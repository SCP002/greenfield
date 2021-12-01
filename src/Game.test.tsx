import { render } from '@testing-library/react';
import Game from 'Game';

test('contains the game class', () => {
  const { container } = render(<Game />);
  expect(container).toBeInTheDocument();
});
