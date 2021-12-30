import { FieldComp } from 'components/FieldComp/FieldComp';
import 'components/GameComp/GameComp.scoped.scss';
import { MenuComp } from 'components/MenuComp/MenuComp';
import { StoresContext } from 'index';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';

export const GameComp = observer(function GameComp() {
  const game = useContext(StoresContext).game;

  return (
    <div className={GameComp.name}>
      <FieldComp
        rows={game.field.rows}
        onCellClick={(cellIdx: number, rowIdx: number) => {
          game.onCellClick(cellIdx, rowIdx);
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
          game.onRowAmount(v);
        }}
        onFlipTargetCell={(v) => {
          game.setFlipTargetCell(v);
          game.field.init(game.colAmount, game.rowAmount);
          game.resetSteps();
        }}
        onColCtrlDown={() => {
          game.setPrevColAmount(game.colAmount);
        }}
        onColCtrlUp={() => {
          if (game.colAmount === game.prevColAmount) {
            return;
          }
          game.field.init(game.colAmount, game.rowAmount);
          game.resetSteps();
        }}
        onRandomize={() => {
          game.field.init(game.colAmount, game.rowAmount);
          game.resetSteps();
        }}
      />
    </div>
  );
});
