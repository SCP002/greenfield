import { render } from '@testing-library/react';
import { MenuComp } from 'components/MenuComp';

test('Component renders', () => {
  const { container } = render(<MenuComp />);
  expect(container).toBeInTheDocument();
});
