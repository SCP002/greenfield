import { FieldComp } from 'components/FieldComp';
import 'components/GameComp/styles.scoped.scss';
import { useEffect } from 'react';
import { useImmer } from 'use-immer';

interface Props {}

interface State {
  changeClickedCell: boolean;
  colAmount: number;
  rowAmount: number;
  stepsAmount: number;
}

export function GameComp(props: Props): JSX.Element {
  const [state, setState] = useImmer<State>({
    changeClickedCell: false,
    colAmount: 6,
    rowAmount: 1,
    stepsAmount: 0,
  });

  useEffect(() => {
    console.log(state); // TODO: Remove; Update Field on colAmount / rowAmount change
  }, [state]);

  return (
    <div className={GameComp.name}>
      <FieldComp
        colAmount={state.colAmount}
        rowAmount={state.rowAmount}
        onClick={handeClick}
      />
    </div>
  );

  function handeClick() {
    console.log('Handle click!'); // TODO: Remove
  }

  function resetSteps() {
    setState((s) => {
      s.stepsAmount = 0;
    });
  }
}
