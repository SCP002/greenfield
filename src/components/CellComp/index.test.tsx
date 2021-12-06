import { render } from '@testing-library/react';
import { CellComp } from 'components/CellComp';

test('Component renders', () => {
  const { container } = render(<CellComp onClick={() => {}} />);
  expect(container).toBeInTheDocument();
});
