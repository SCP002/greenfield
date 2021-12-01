import { render } from '@testing-library/react';
import Game from './Game';

test('Component renders', () => {
  const { container } = render(<Game />);
  expect(container).toBeInTheDocument();
});
