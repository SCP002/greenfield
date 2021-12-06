import { CellComp } from 'components/CellComp';
import 'components/Field/styles.scoped.scss';
import { times } from 'lodash';
import React from 'react';

interface Props {
  columns: number;
  rows: number;
  onClick: (evt: React.MouseEvent) => void;
}

export function FieldComp(props: Props): JSX.Element {
  return (
    <div className={FieldComp.name}>
      <table>
        <tbody>{renderRows(props.columns, props.rows)}</tbody>
      </table>
    </div>
  );

  function renderRows(colAmount: number, rowAmount: number): JSX.Element[] {
    return times(rowAmount, (rowIdx) => {
      return (
        <tr key={rowIdx}>
          {times(colAmount, (colIdx) => {
            return (
              <td key={colIdx}>
                <CellComp key={colIdx} onClick={props.onClick} />
              </td>
            );
          })}
        </tr>
      );
    });
  }
}
