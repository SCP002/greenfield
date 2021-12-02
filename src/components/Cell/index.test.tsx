import { render } from '@testing-library/react';
import Cell from 'components/Cell';

test('Component renders', () => {
  const { container } = render(<Cell />);
  expect(container).toBeInTheDocument();
});
