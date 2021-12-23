import { action, makeObservable, observable } from 'mobx';
import { Field } from 'store/Field';

export class GameStore {
  prevColAmount = 0;
  colAmount = 6;
  rowAmount = 1;
  stepsAmount = 0;
  flipTargetCell = false;
  field = new Field(this.colAmount, this.rowAmount);

  constructor() {
    makeObservable(
      this,
      {
        prevColAmount: observable,
        colAmount: observable,
        rowAmount: observable,
        stepsAmount: observable,
        flipTargetCell: observable,
        field: observable,

        setPrevColAmount: action,
        setColAmount: action,
        setRowAmount: action,
        addStep: action,
        resetSteps: action,
        setFlipTargetCell: action,
      },
      { name: GameStore.name }
    );
  }

  setPrevColAmount(v: number) {
    this.prevColAmount = v;
  }

  setColAmount(v: number) {
    this.colAmount = v;
  }

  setRowAmount(v: number) {
    this.rowAmount = v;
  }

  addStep() {
    this.stepsAmount++;
  }

  resetSteps() {
    this.stepsAmount = 0;
  }

  setFlipTargetCell(v: boolean) {
    this.flipTargetCell = v;
  }
}

export const game = new GameStore();
