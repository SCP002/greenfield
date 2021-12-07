import { Cell } from 'components/FieldComp/Cell';

export interface Row {
  cells: Cell[];
}

export namespace Row {
  export function New(cells: Cell[]): Row {
    return { cells: cells };
  }
}
