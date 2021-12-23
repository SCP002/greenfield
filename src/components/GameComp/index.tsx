import { FieldComp } from 'components/FieldComp';
import 'components/GameComp/styles.scoped.scss';
import { MenuComp } from 'components/MenuComp';
import { observer } from 'mobx-react-lite';
import { game } from 'store/GameStore';

// FIXME: Columns won't work with arrow key
// TODO: Increment steps amount
// TODO: Step reset
// TODO: makeAutoObservable

export const GameComp = observer(() => {
  return (
    <div className={'GameComp'}>
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
