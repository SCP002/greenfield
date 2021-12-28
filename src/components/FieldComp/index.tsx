import { CellComp } from 'components/CellComp';
import 'components/FieldComp/styles.scoped.scss';
import { observer } from 'mobx-react-lite';
import { Row } from 'store/Row';

interface Props {
  rows: Row[];
  onCellClick: (cellIdx: number, rowIdx: number) => void;
}

export const FieldComp = observer(function FieldComp(props: Props) {
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
                    props.onCellClick(cellIdx, rowIdx);
                  }}
                />
              </td>
            );
          })}
        </tr>
      );
    });
  }
});
