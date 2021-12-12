import 'components/MenuComp/styles.scoped.scss';

interface Props {
  flipTargetCell: boolean;
  colAmount: number;
  rowAmount: number;
  stepsAmount: number;
  onFlipTargetCell: (v: boolean) => void;
  onColAmount: (v: number) => void;
  onRowAmount: (v: number) => void;
  onRandomize: () => void;
}

export function MenuComp(props: Props): JSX.Element {
  function showAbout() {
    window.alert(
      'Small puzzle game.\n' +
        'To win, mark all cells green.\n' +
        'Click on the cell will revert colors of all neighbors except for diagonals.'
    );
  }

  return (
    <div className={MenuComp.name}>
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
}
