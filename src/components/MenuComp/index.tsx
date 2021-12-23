import 'components/MenuComp/styles.scoped.scss';
import { observer } from 'mobx-react-lite';

interface Props {
  flipTargetCell: boolean;
  colAmount: number;
  rowAmount: number;
  stepsAmount: number;
  onFlipTargetCell: (v: boolean) => void;
  onColAmount: (v: number) => void;
  onRowAmount: (v: number) => void;
  onColMouseDown: () => void;
  onColMouseUp: () => void;
  onRandomize: () => void;
}

export const MenuComp = observer((props: Props) => {
  function showAbout() {
    window.alert(
      'Small puzzle game.\n' +
        'To win, mark all cells green.\n' +
        'Click on the cell will revert colors of all neighbors except for diagonals.'
    );
  }

  return (
    <div className={'MenuComp'}>
      <div>
        <p>steps counter: {props.stepsAmount}</p>
      </div>

      <div>
        <p>
          field size: {props.rowAmount} x {props.colAmount}
        </p>
        <label>
          rows:
          <input
            type="range"
            min="1"
            max="9"
            step="1"
            value={props.rowAmount}
            onChange={(evt) => {
              props.onRowAmount(evt.target.valueAsNumber);
            }}
          />
        </label>
        <label>
          columns:
          <input
            type="range"
            min="1"
            max="9"
            step="1"
            value={props.colAmount}
            onChange={(evt) => {
              props.onColAmount(evt.target.valueAsNumber);
            }}
            onMouseDown={props.onColMouseDown}
            onMouseUp={props.onColMouseUp}
          />
        </label>
      </div>

      <div>
        <label>
          change clicked cell:
          <input
            type="checkbox"
            checked={props.flipTargetCell}
            onChange={(evt) => {
              props.onFlipTargetCell(evt.target.checked);
            }}
          />
        </label>
      </div>

      <div>
        <button onClick={props.onRandomize}>randomize field</button>
      </div>

      <div>
        <button onClick={showAbout}>about</button>
      </div>
    </div>
  );
});
