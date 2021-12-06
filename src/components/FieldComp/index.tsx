import { CellComp } from 'components/CellComp';
import { Field } from 'components/FieldComp/Field';
import 'components/FieldComp/styles.scoped.scss';
import { useImmer } from 'use-immer';

interface Props {
  colAmount: number;
  rowAmount: number;
  onClick: () => void;
}

export function FieldComp(props: Props): JSX.Element {
  const [rows, setRows] = useImmer(Field.New(props.colAmount, props.rowAmount));

  return (
    <div className={FieldComp.name}>
      <table>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );

  function renderRows(): JSX.Element[] {
    return rows.map((row, rowIdx) => {
      return (
        <tr key={rowIdx}>
          {row.cells.map((cell, cellIdx) => {
            return (
              <td key={cellIdx}>
                <CellComp
                  key={cellIdx}
                  isActive={cell.initialActive}
                  onClick={props.onClick}
                />
              </td>
            );
          })}
        </tr>
      );
    });
  }
}
