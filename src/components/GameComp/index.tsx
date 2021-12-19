import { FieldComp } from 'components/FieldComp';
import { Field } from 'components/GameComp/Field';
import { Row } from 'components/GameComp/Row';
import 'components/GameComp/styles.scoped.scss';
import { MenuComp } from 'components/MenuComp';
import { WritableDraft } from 'immer/dist/internal';
import { useEffect } from 'react';
import { useImmerReducer } from 'use-immer';

// FIXME: Click on columns amount resets the game field (colUpdateLock triggers render)
// FIXME: Win check happens before dispatch (mobx)
// TODO: Calculate colAmount and rowAmount from Row[]
// TODO: State to type or Action to interface?
// TODO: Check if still need useEffect?
// TODO: Pass dispatch
// TODO: Increment steps amount
// TODO: Step reset

interface Props {}

interface State {
  rows: Row[];
  colAmount: number;
  rowAmount: number;
  stepsAmount: number;
  flipTargetCell: boolean;
  colUpdateLock: boolean;
}

type Action =
  | { type: 'newField' }
  | { type: 'revertAreaState'; cellIdx: number; rowIdx: number }
  | { type: 'colAmount'; v: number }
  | { type: 'rowAmount'; v: number }
  | { type: 'addStep' }
  | { type: 'resetSteps' }
  | { type: 'flipTargetCell'; v: boolean }
  | { type: 'colUpdateLock'; v: boolean };

const initialState: State = {
  rows: [],
  colAmount: 6,
  rowAmount: 1,
  stepsAmount: 0,
  flipTargetCell: false,
  colUpdateLock: false,
};

function reducer(draft: WritableDraft<State>, action: Action) {
  switch (action.type) {
    case 'newField':
      draft.rows = Field.New(draft.colAmount, draft.rowAmount);
      break;
    case 'revertAreaState':
      Field.revertAreaState(
        draft.rows,
        action.cellIdx,
        action.rowIdx,
        draft.flipTargetCell
      );
      break;
    case 'colAmount':
      draft.colAmount = action.v;
      break;
    case 'rowAmount':
      draft.rowAmount = action.v;
      break;
    case 'addStep':
      draft.stepsAmount++;
      break;
    case 'resetSteps':
      draft.stepsAmount = 0;
      break;
    case 'flipTargetCell':
      draft.flipTargetCell = action.v;
      break;
    case 'colUpdateLock':
      draft.colUpdateLock = action.v;
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
    state.colAmount,
    state.rowAmount,
    state.stepsAmount,
    state.flipTargetCell,
    state.colUpdateLock,
    dispatch,
  ]);

  return (
    <div className={GameComp.name}>
      <FieldComp rows={state.rows} onCellClick={onCellClick} />
      <MenuComp
        colAmount={state.colAmount}
        rowAmount={state.rowAmount}
        stepsAmount={state.stepsAmount}
        flipTargetCell={state.flipTargetCell}
        onColAmount={(v) => {
          dispatch({ type: 'colAmount', v: v });
        }}
        onRowAmount={(v) => {
          dispatch({ type: 'rowAmount', v: v });
        }}
        onFlipTargetCell={(v) => {
          dispatch({ type: 'flipTargetCell', v: v });
        }}
        onMouseDown={() => {
          dispatch({ type: 'colUpdateLock', v: true });
        }}
        onMouseUp={() => {
          dispatch({ type: 'colUpdateLock', v: false });
        }}
        onRandomize={() => {
          dispatch({ type: 'newField' });
        }}
      />
    </div>
  );

  function onCellClick(cellIdx: number, rowIdx: number) {
    dispatch({ type: 'revertAreaState', cellIdx: cellIdx, rowIdx: rowIdx });
    if (Field.isWin(state.rows)) {
      window.alert(`You won in ${state.stepsAmount} steps!`);
    }
  }
}
