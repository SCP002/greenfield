import { Cell } from 'components/FieldComp/Cell';
import { Row } from 'components/FieldComp/Row';
import lo from 'lodash';

export namespace Field {
  export function New(colAmount: number, rowAmount: number): Row[] { // TODO: Generating duplicates?
    const cells = lo.map(Array(colAmount), () => {
      return Cell.New();
    });

    const rows = lo.map(Array(rowAmount), () => {
      return Row.New(cells);
    });

    return rows;
  }

  export function revertAreaState(
    rows: Row[],
    cellIdx: number,
    rowIdx: number
  ) {
    revertCellState(rows, cellIdx - 1, rowIdx);
    revertCellState(rows, cellIdx + 1, rowIdx);
    revertCellState(rows, cellIdx, rowIdx - 1);
    revertCellState(rows, cellIdx, rowIdx + 1);
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
