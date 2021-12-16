import { FieldComp } from 'components/FieldComp';
import { Field } from 'components/GameComp/Field';
import { Row } from 'components/GameComp/Row';
import 'components/GameComp/styles.scoped.scss';
import { MenuComp } from 'components/MenuComp';
import { useEffect } from 'react';
import { useImmer } from 'use-immer';

// FIXME: Click on columns amount resets the game field
// TODO: Increment steps amount
// TODO: Win message

interface Props {}

interface State {
  flipTargetCell: boolean;
  colAmount: number;
  rowAmount: number;
  stepsAmount: number;
  colUpdateLock: boolean;
  rows: Row[];
}

export function GameComp(props: Props): JSX.Element {
  const [state, updateState] = useImmer<State>({
    flipTargetCell: false,
    colAmount: 6,
    rowAmount: 1,
    stepsAmount: 0,
    colUpdateLock: false,
    rows: [],
  });

  useEffect(() => {
    if (state.colUpdateLock) {
      return;
    }
    updateState((draft) => {
      draft.rows = Field.New(state.colAmount, state.rowAmount);
    });
  }, [
    state.flipTargetCell,
    state.colAmount,
    state.rowAmount,
    state.stepsAmount,
    state.colUpdateLock,
    updateState,
  ]);

  return (
    <div className={GameComp.name}>
      <FieldComp rows={state.rows} onCellClick={onCellClick} />
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
          // TODO: Randomize button
        }}
      />
    </div>
  );

  function onCellClick(rowIdx: number, cellIdx: number) {
    updateState((draft) => {
      Field.revertAreaState(draft.rows, cellIdx, rowIdx, draft.flipTargetCell);
    });
  }

  function resetSteps() {
    // TODO: Step reset
    updateState((s) => {
      s.stepsAmount = 0;
    });
  }
}
