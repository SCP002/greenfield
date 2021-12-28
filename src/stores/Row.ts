import { Cell } from 'stores/Cell';

export class Row {
  cells: Cell[];

  constructor(cells: Cell[]) {
    this.cells = cells;
  }
}
