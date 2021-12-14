import { Cell } from 'components/FieldComp/Cell';
import { Row } from 'components/FieldComp/Row';
import lo from 'lodash';

export namespace Field {
  export function New(colAmount: number, rowAmount: number): Row[] {
    return lo.map(Array(rowAmount), () => {
      return Row.New(
        lo.map(Array(colAmount), () => {
          return Cell.New();
        })
      );
    });
  }

  export function revertAreaState(
    rows: Row[],
    cellIdx: number,
    rowIdx: number,
    flipTargetCell: boolean
  ) {
    if (flipTargetCell) {
      revertCellState(rows, cellIdx, rowIdx);
    }

    revertCellState(rows, cellIdx - 1, rowIdx);
    revertCellState(rows, cellIdx + 1, rowIdx);
    revertCellState(rows, cellIdx, rowIdx - 1);
    revertCellState(rows, cellIdx, rowIdx + 1);
  }

  export function isWin(rows: Row[]): boolean {
    return rows.every((row) => {
      return row.cells.every((cell) => {
        return cell.active;
      });
    });
  }

  function revertCellState(rows: Row[], cellIdx: number, rowIdx: number) {
    if (
      rowIdx >= 0 &&
      cellIdx >= 0 &&
      rowIdx < rows.length &&
      cellIdx < rows[rowIdx].cells.length
    ) {
      Cell.revertState(rows[rowIdx].cells[cellIdx]);
    }
  }
}
