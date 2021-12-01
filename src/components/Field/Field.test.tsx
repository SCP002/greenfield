import { render } from '@testing-library/react';
import Field from './Field';

test('Component renders', () => {
  const { container } = render(<Field />);
  expect(container).toBeInTheDocument();
});
