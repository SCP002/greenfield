import { Cell } from 'components/FieldComp/Cell';

export interface Row {
  readonly cells: ReadonlyArray<Cell>;
}

export namespace Row {
  export function New(cells: Cell[]): Row {
    return { cells: cells };
  }
}
