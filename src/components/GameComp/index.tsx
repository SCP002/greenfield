import { FieldComp } from 'components/FieldComp';
import 'components/GameComp/styles.scoped.scss';
import { MenuComp } from 'components/MenuComp';
import { StoresContext } from 'index';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';

// FIXME: Columns won't work with arrow key
// TODO: Reaction on colAmount / rowAmount
// TODO: Increment steps amount
// TODO: Step reset

export const GameComp = observer(function GameComp() {
  const game = useContext(StoresContext).game;

  return (
    <div className={GameComp.name}>
      <FieldComp
        rows={game.field.rows}
        onCellClick={(cellIdx: number, rowIdx: number) => {
          game.field.invertAreaState(cellIdx, rowIdx, game.flipTargetCell);
          if (game.field.isWin()) {
            window.alert(`You won in ${game.stepsAmount} steps!`);
          }
        }}
      />
      <MenuComp
        colAmount={game.colAmount}
        rowAmount={game.rowAmount}
        stepsAmount={game.stepsAmount}
        flipTargetCell={game.flipTargetCell}
        onColAmount={(v) => {
          game.setColAmount(v);
        }}
        onRowAmount={(v) => {
          game.setRowAmount(v);
          game.field.init(game.colAmount, game.rowAmount);
        }}
        onFlipTargetCell={(v) => {
          game.setFlipTargetCell(v);
        }}
        onColMouseDown={() => {
          game.setPrevColAmount(game.colAmount);
        }}
        onColMouseUp={() => {
          if (game.colAmount === game.prevColAmount) {
            return;
          }
          game.field.init(game.colAmount, game.rowAmount);
        }}
        onRandomize={() => {
          game.field.init(game.colAmount, game.rowAmount);
        }}
      />
    </div>
  );
});
