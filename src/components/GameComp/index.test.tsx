import { render } from '@testing-library/react';
import { GameComp } from 'components/GameComp';

test('Component renders', () => {
  const { container } = render(<GameComp />);
  expect(container).toBeInTheDocument();
});
