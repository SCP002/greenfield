import { Cell } from 'components/Game/Cell';
import { Row } from 'components/Game/Row';

export namespace Field {
  export function New(
    rowAmount: number,
    colAmount: number
  ): ReadonlyArray<Row> {
    const cells = Array<Cell>(colAmount);
    cells.fill(Cell.New());

    const rows = Array<Row>(rowAmount);
    rows.fill(Row.New(cells));

    return rows;
  }
}
