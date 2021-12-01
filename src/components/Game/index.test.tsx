import { render } from '@testing-library/react';
import Game from 'components/Game';

test('Game component renders', () => {
  const { container } = render(<Game />);
  expect(container).toBeInTheDocument();
});
