import { render } from '@testing-library/react';
import { FieldComp } from 'components/FieldComp/FieldComp';

test('Component renders', () => {
  const { container } = render(<FieldComp />);
  expect(container).toBeInTheDocument();
});
