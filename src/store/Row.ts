import { Cell } from 'store/Cell';

export class Row {
  cells: Cell[];

  constructor(cells: Cell[]) {
    this.cells = cells;
  }
}
