import 'components/MenuComp/MenuComp.scoped.scss';
import { StoresContext } from 'index';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';

export const MenuComp = observer(function MenuComp() {
  const game = useContext(StoresContext).game;

  function showAbout() {
    window.alert(
      'Small puzzle game.\n' +
        'To win, mark all cells green.\n' +
        'Click on the cell will invert colors of all neighbors except for diagonals.'
    );
  }

  function isArrowEvent(evt: React.KeyboardEvent) {
    return evt.key.startsWith('Arrow');
  }

  return (
    <div className={MenuComp.name}>
      <div>
        <p>steps counter: {game.stepsAmount}</p>
      </div>

      <div>
        <p>
          field size: {game.rowAmount} x {game.colAmount}
        </p>
        <label>
          rows:
          <input
            type="range"
            min="1"
            max="9"
            step="1"
            value={game.rowAmount}
            onChange={(evt) => {
              game.onRowAmount(evt.target.valueAsNumber);
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
            value={game.colAmount}
            onChange={(evt) => {
              game.setColAmount(evt.target.valueAsNumber);
            }}
            onMouseDown={() => {
              game.onColCtrlDown();
            }}
            onMouseUp={() => {
              game.onColCtrlUp();
            }}
            onKeyDown={(evt) => {
              if (isArrowEvent(evt)) {
                game.onColCtrlDown();
              }
            }}
            onKeyUp={(evt) => {
              if (isArrowEvent(evt)) {
                game.onColCtrlUp();
              }
            }}
          />
        </label>
      </div>

      <div>
        <label>
          change clicked cell:
          <input
            type="checkbox"
            checked={game.flipTargetCell}
            onChange={(evt) => {
              game.onFlipTargetCell(evt.target.checked);
            }}
          />
        </label>
      </div>

      <div>
        <button
          onClick={() => {
            game.onRandomize();
          }}
        >
          randomize field
        </button>
      </div>

      <div>
        <button onClick={showAbout}>about</button>
      </div>
    </div>
  );
});
