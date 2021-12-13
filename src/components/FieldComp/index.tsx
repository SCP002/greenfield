import { CellComp } from 'components/CellComp';
import { Field } from 'components/FieldComp/Field';
import { Row } from 'components/FieldComp/Row';
import 'components/FieldComp/styles.scoped.scss';
import { useEffect } from 'react';
import { useImmer } from 'use-immer';

interface Props {
  colAmount: number;
  rowAmount: number;
  colUpdateLock: boolean;
}

interface State {
  rows: Row[];
}

export function FieldComp(props: Props): JSX.Element {
  const [state, updateState] = useImmer<State>({
    rows: [],
  });

  useEffect(() => {
    if (props.colUpdateLock) {
      return;
    }
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
        <tr key={'tr' + rowIdx}>
          {row.cells.map((cell, cellIdx) => {
            return (
              <td key={'td' + cellIdx + rowIdx}>
                <CellComp
                  key={'cell' + cellIdx + rowIdx}
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
