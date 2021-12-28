import lo from 'lodash';
import { action, makeObservable, observable } from 'mobx';
import { Cell } from 'stores/Cell';
import { Row } from 'stores/Row';

export class Field {
  @observable rows: Row[] = [];

  constructor(colAmount: number, rowAmount: number) {
    makeObservable(this);
    this.init(colAmount, rowAmount);
  }

  @action
  init(colAmount: number, rowAmount: number) {
    this.rows = lo.map(Array(rowAmount), () => {
      return new Row(
        lo.map(Array(colAmount), () => {
          return new Cell();
        })
      );
    });
  }

  @action
  invertAreaState(cellIdx: number, rowIdx: number, flipTargetCell: boolean) {
    if (flipTargetCell) {
      this.invertCellState(cellIdx, rowIdx);
    }

    this.invertCellState(cellIdx - 1, rowIdx);
    this.invertCellState(cellIdx + 1, rowIdx);
    this.invertCellState(cellIdx, rowIdx - 1);
    this.invertCellState(cellIdx, rowIdx + 1);
  }

  isWin(): boolean {
    return this.rows.every((row) => {
      return row.cells.every((cell) => {
        return cell.active;
      });
    });
  }

  @action
  private invertCellState(cellIdx: number, rowIdx: number) {
    if (
      rowIdx >= 0 &&
      cellIdx >= 0 &&
      rowIdx < this.rows.length &&
      cellIdx < this.rows[rowIdx].cells.length
    ) {
      this.rows[rowIdx].cells[cellIdx].invert();
    }
  }
}
