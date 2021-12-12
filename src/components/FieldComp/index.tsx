import { CellComp } from 'components/CellComp';
import { Field } from 'components/FieldComp/Field';
import { Row } from 'components/FieldComp/Row';
import 'components/FieldComp/styles.scoped.scss';
import { useEffect } from 'react';
import { useImmer } from 'use-immer';

interface Props {
  colAmount: number;
  rowAmount: number;
}

interface State {
  rows: Row[];
}

export function FieldComp(props: Props): JSX.Element {
  const [state, updateState] = useImmer<State>({
    rows: Field.New(props.colAmount, props.rowAmount),
  });

  useEffect(() => {
    updateState((draft) => {
      draft.rows = Field.New(props.colAmount, props.rowAmount);
    });
  }, [props, updateState]);

  return (
    <div className={FieldComp.name}>
      <table>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );

  function onCellClick(rowIdx: number, cellIdx: number) {
    updateState((draft) => {
      Field.revertAreaState(draft.rows, cellIdx, rowIdx);
    });
  }

  function renderRows(): JSX.Element[] {
    return state.rows.map((row, rowIdx) => {
      return (
        <tr key={rowIdx}>
          {row.cells.map((cell, cellIdx) => {
            return (
              <td key={cellIdx}>
                <CellComp
                  key={cellIdx}
                  isActive={cell.active}
                  onClick={() => {
                    onCellClick(rowIdx, cellIdx);
                  }}
                />
              </td>
            );
          })}
        </tr>
      );
    });
  }
}
