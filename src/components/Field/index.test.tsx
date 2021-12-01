import { render } from '@testing-library/react';
import Field from 'components/Field';

test('Field component renders', () => {
  const { container } = render(<Field />);
  expect(container).toBeInTheDocument();
});
