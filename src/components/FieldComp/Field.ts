import { Cell } from 'components/FieldComp/Cell';
import { Row } from 'components/FieldComp/Row';
import lo from 'lodash';

export namespace Field {
  export function New(colAmount: number, rowAmount: number): Row[] {
    const cells = lo.map(Array(colAmount), () => {
      return Cell.New();
    });

    const rows = lo.map(Array(rowAmount), () => {
      return Row.New(cells);
    });

    return rows;
  }
}
