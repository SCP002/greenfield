import { action, makeObservable, observable } from 'mobx';
import { Field } from 'stores/Field';

export class GameStore {
  @observable prevColAmount = 0;
  @observable colAmount = 6;
  @observable rowAmount = 1;
  @observable flipTargetCell = false;
  @observable stepsAmount = 0;
  @observable field = new Field(this.colAmount, this.rowAmount);

  constructor() {
    makeObservable(this);
  }

  @action
  setPrevColAmount(v: number) {
    this.prevColAmount = v;
  }

  @action
  setColAmount(v: number) {
    this.colAmount = v;
  }

  @action
  setRowAmount(v: number) {
    this.rowAmount = v;
  }

  @action
  setFlipTargetCell(v: boolean) {
    this.flipTargetCell = v;
  }

  @action
  addStep() {
    this.stepsAmount++;
  }

  @action
  resetSteps() {
    this.stepsAmount = 0;
  }

  @action
  onCellClick(cellIdx: number, rowIdx: number) {
    this.field.invertAreaState(cellIdx, rowIdx, this.flipTargetCell);
    this.addStep();
    if (this.field.isWin()) {
      window.alert(`You won in ${this.stepsAmount} steps!`);
    }
  }

  @action
  onRowAmount(v: number) {
    this.setRowAmount(v);
    this.field.init(this.colAmount, this.rowAmount);
    this.resetSteps();
  }

  @action
  onFlipTargetCell(v: boolean) {
    this.setFlipTargetCell(v);
    this.field.init(this.colAmount, this.rowAmount);
    this.resetSteps();
  }

  @action
  onColCtrlUp() {
    if (this.colAmount === this.prevColAmount) {
      return;
    }
    this.field.init(this.colAmount, this.rowAmount);
    this.resetSteps();
  }

  @action
  onRandomize() {
    this.field.init(this.colAmount, this.rowAmount);
    this.resetSteps();
  }
}
