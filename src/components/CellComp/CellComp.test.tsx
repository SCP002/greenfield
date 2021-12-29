import { render } from '@testing-library/react';
import { CellComp } from 'components/CellComp/CellComp';

test('Component renders', () => {
  const { container } = render(<CellComp isActive={true} onClick={() => {}} />);
  expect(container).toBeInTheDocument();
});
