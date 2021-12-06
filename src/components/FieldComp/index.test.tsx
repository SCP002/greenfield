import { render } from '@testing-library/react';
import { FieldComp } from 'components/FieldComp';

test('Component renders', () => {
  const { container } = render(
    <FieldComp columns={0} rows={0} onClick={() => {}} />
  );
  expect(container).toBeInTheDocument();
});
