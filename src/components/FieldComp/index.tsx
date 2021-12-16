import { CellComp } from 'components/CellComp';
import 'components/FieldComp/styles.scoped.scss';
import { Row } from 'components/GameComp/Row';

interface Props {
  rows: Row[];
  onCellClick: (rowIdx: number, cellIdx: number) => void;
}

export function FieldComp(props: Props): JSX.Element {
  return (
    <div className={FieldComp.name}>
      <table>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );

  function renderRows(): JSX.Element[] {
    return props.rows.map((row, rowIdx) => {
      return (
        <tr key={'tr' + rowIdx}>
          {row.cells.map((cell, cellIdx) => {
            return (
              <td key={'td' + cellIdx + rowIdx}>
                <CellComp
                  key={'cell' + cellIdx + rowIdx}
                  isActive={cell.active}
                  onClick={() => {
                    props.onCellClick(rowIdx, cellIdx);
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
