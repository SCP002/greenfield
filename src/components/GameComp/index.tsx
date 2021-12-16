import { FieldComp } from 'components/FieldComp';
import { Field } from 'components/GameComp/Field';
import { Row } from 'components/GameComp/Row';
import 'components/GameComp/styles.scoped.scss';
import { MenuComp } from 'components/MenuComp';
import { WritableDraft } from 'immer/dist/internal';
import { useEffect } from 'react';
import { useImmerReducer } from 'use-immer';

// FIXME: Click on columns amount resets the game field
// FIXME: Win displays only on second click
// TODO: Increment steps amount
// TODO: Step reset

interface Props {}

interface State {
  flipTargetCell: boolean;
  colAmount: number;
  rowAmount: number;
  stepsAmount: number;
  colUpdateLock: boolean;
  rows: Row[];
}

type Action =
  | { type: 'colAmount'; v: number }
  | { type: 'rowAmount'; v: number }
  | { type: 'flipTargetCell'; v: boolean }
  | { type: 'addStep' }
  | { type: 'resetSteps' }
  | { type: 'colUpdateLock'; v: boolean }
  | { type: 'newField' }
  | { type: 'revertAreaState'; cellIdx: number; rowIdx: number };

const initialState: State = {
  flipTargetCell: false,
  colAmount: 6,
  rowAmount: 1,
  stepsAmount: 0,
  colUpdateLock: false,
  rows: [],
};

function reducer(draft: WritableDraft<State>, action: Action) {
  switch (action.type) {
    case 'colAmount':
      draft.colAmount = action.v;
      break;
    case 'rowAmount':
      draft.rowAmount = action.v;
      break;
    case 'flipTargetCell':
      draft.flipTargetCell = action.v;
      break;
    case 'addStep':
      draft.stepsAmount++;
      break;
    case 'resetSteps':
      draft.stepsAmount = 0;
      break;
    case 'colUpdateLock':
      draft.colUpdateLock = action.v;
      break;
    case 'newField':
      draft.rows = Field.New(draft.colAmount, draft.rowAmount);
      break;
    case 'revertAreaState':
      console.log('dispatching revertAreaState'); // TODO: Remove
      Field.revertAreaState(
        draft.rows,
        action.cellIdx,
        action.rowIdx,
        draft.flipTargetCell
      );
      break;
  }
}

export function GameComp(props: Props): JSX.Element {
  const [state, dispatch] = useImmerReducer<State, Action>(
    reducer,
    initialState
  );

  useEffect(() => {
    if (state.colUpdateLock) {
      return;
    }
    dispatch({ type: 'newField' });
  }, [
    state.flipTargetCell,
    state.colAmount,
    state.rowAmount,
    state.stepsAmount,
    state.colUpdateLock,
    dispatch,
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
          dispatch({ type: 'flipTargetCell', v: v });
        }}
        onColAmount={(v) => {
          dispatch({ type: 'colAmount', v: v });
        }}
        onRowAmount={(v) => {
          dispatch({ type: 'rowAmount', v: v });
        }}
        onMouseDown={() => {
          dispatch({ type: 'colUpdateLock', v: true });
        }}
        onMouseUp={() => {
          dispatch({ type: 'colUpdateLock', v: false });
        }}
        onRandomize={() => {
          console.log('onRandomize()');
          // TODO: Randomize button
        }}
      />
    </div>
  );

  function onCellClick(rowIdx: number, cellIdx: number) {
    dispatch({ type: 'revertAreaState', cellIdx: cellIdx, rowIdx: rowIdx });
    console.log('Starting isWin check'); // TODO: Remove
    if (Field.isWin(state.rows)) {
      window.alert(`You won in ${state.stepsAmount} steps!`);
    }
  }
}
