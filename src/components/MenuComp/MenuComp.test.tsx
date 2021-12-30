import { render } from '@testing-library/react';
import { MenuComp } from 'components/MenuComp/MenuComp';

test('Component renders', () => {
  const { container } = render(<MenuComp />);
  expect(container).toBeInTheDocument();
});
