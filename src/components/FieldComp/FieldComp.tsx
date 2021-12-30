import { CellComp } from 'components/CellComp/CellComp';
import 'components/FieldComp/FieldComp.scoped.scss';
import { StoresContext } from 'index';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';

export const FieldComp = observer(function FieldComp() {
  const game = useContext(StoresContext).game;

  return (
    <div className='FieldComp'>
      <table>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );

  function renderRows(): JSX.Element[] {
    return game.field.rows.map((row, rowIdx) => {
      return (
        <tr key={'tr' + rowIdx}>
          {row.cells.map((cell, cellIdx) => {
            return (
              <td key={'td' + cellIdx + rowIdx}>
                <CellComp
                  key={'cell' + cellIdx + rowIdx}
                  isActive={cell.active}
                  onClick={() => {
                    game.onCellClick(cellIdx, rowIdx);
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
