import { Cell } from 'components/GameComp/Cell';
import { Row } from 'components/GameComp/Row';

export namespace Field {
  export function New(
    colAmount: number,
    rowAmount: number
  ): ReadonlyArray<Row> {
    const cells = Array<Cell>(colAmount);
    cells.fill(Cell.New());

    const rows = Array<Row>(rowAmount);
    rows.fill(Row.New(cells));

    return rows;
  }
}