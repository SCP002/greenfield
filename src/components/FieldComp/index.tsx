import { CellComp } from 'components/CellComp';
import { Cell } from 'components/FieldComp/Cell';
import { Field } from 'components/FieldComp/Field';
import 'components/FieldComp/styles.scoped.scss';
import { useImmer } from 'use-immer';

interface Props {
  colAmount: number;
  rowAmount: number;
}

export function FieldComp(props: Props): JSX.Element {
  const [rows, updateRows] = useImmer(
    Field.New(props.colAmount, props.rowAmount)
  );

  return (
    <div className={FieldComp.name}>
      <table>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );

  function onCellClick(rowIdx: number, cellIdx: number) {
    updateRows((rows) => {
      Cell.revertState(rows[rowIdx].cells[cellIdx]);
    });
  }

  function renderRows(): JSX.Element[] {
    return rows.map((row, rowIdx) => {
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
