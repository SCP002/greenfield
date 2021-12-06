import { render } from '@testing-library/react';
import { FieldComp } from 'components/FieldComp';

test('Component renders', () => {
  const { container } = render(
    <FieldComp colAmount={0} rowAmount={0} onClick={() => {}} />
  );
  expect(container).toBeInTheDocument();
});
