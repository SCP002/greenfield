import { render } from '@testing-library/react';
import { MenuComp } from 'components/MenuComp/MenuComp';

test('Component renders', () => {
  const { container } = render(
    <MenuComp
      flipTargetCell={false}
      colAmount={0}
      rowAmount={0}
      stepsAmount={0}
      onFlipTargetCell={() => {}}
      onColAmount={() => {}}
      onRowAmount={() => {}}
      onColCtrlDown={() => {}}
      onColCtrlUp={() => {}}
      onRandomize={() => {}}
    />
  );
  expect(container).toBeInTheDocument();
});
