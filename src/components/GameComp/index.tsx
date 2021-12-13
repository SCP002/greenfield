import { FieldComp } from 'components/FieldComp';
import 'components/GameComp/styles.scoped.scss';
import { MenuComp } from 'components/MenuComp';
import { useImmer } from 'use-immer';

interface Props {}

interface State {
  flipTargetCell: boolean;
  colAmount: number;
  rowAmount: number;
  stepsAmount: number;
  colUpdateLock: boolean;
}

export function GameComp(props: Props): JSX.Element {
  const [state, updateState] = useImmer<State>({
    flipTargetCell: false,
    colAmount: 6,
    rowAmount: 1,
    stepsAmount: 0,
    colUpdateLock: false,
  });

  return (
    <div className={GameComp.name}>
      <FieldComp
        colAmount={state.colAmount}
        rowAmount={state.rowAmount}
        colUpdateLock={state.colUpdateLock}
      />
      <MenuComp
        flipTargetCell={state.flipTargetCell}
        colAmount={state.colAmount}
        rowAmount={state.rowAmount}
        stepsAmount={state.stepsAmount}
        onFlipTargetCell={(v) => {
          updateState((s) => {
            s.flipTargetCell = v;
          });
        }}
        onColAmount={(v) => {
          updateState((s) => {
            s.colAmount = v;
          });
        }}
        onRowAmount={(v) => {
          updateState((s) => {
            s.rowAmount = v;
          });
        }}
        onMouseDown={() => {
          updateState((s) => {
            s.colUpdateLock = true;
          });
        }}
        onMouseUp={() => {
          updateState((s) => {
            s.colUpdateLock = false;
          });
        }}
        onRandomize={() => {
          console.log('onRandomize()');
          // TODO: This
        }}
      />
    </div>
  );

  function resetSteps() {
    updateState((s) => {
      s.stepsAmount = 0;
    });
  }
}
