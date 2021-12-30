import { action, makeObservable, observable } from 'mobx';
import { Field } from 'stores/Field';

export class GameStore {
  @observable prevColAmount = 0;
  @observable colAmount = 6;
  @observable rowAmount = 1;
  @observable flipTargetCell = false;
  @observable stepsAmount = 0;

  field = new Field(this.colAmount, this.rowAmount);

  constructor() {
    makeObservable(this);
  }

  @action
  setColAmount(v: number) {
    this.colAmount = v;
  }

  @action
  onCellClick(cellIdx: number, rowIdx: number) {
    this.field.invertAreaState(cellIdx, rowIdx, this.flipTargetCell);
    this.stepsAmount++;
    if (this.field.isWin()) {
      window.alert(`You won in ${this.stepsAmount} steps!`);
      this.field.init(this.colAmount, this.rowAmount);
      this.stepsAmount = 0;
    }
  }

  @action
  onRowAmount(v: number) {
    this.rowAmount = v;
    this.field.init(this.colAmount, this.rowAmount);
    this.stepsAmount = 0;
  }

  @action
  onFlipTargetCell(v: boolean) {
    this.flipTargetCell = v;
    this.field.init(this.colAmount, this.rowAmount);
    this.stepsAmount = 0;
  }

  @action
  onColCtrlDown() {
    this.prevColAmount = this.colAmount;
  }

  @action
  onColCtrlUp() {
    if (this.colAmount === this.prevColAmount) {
      return;
    }
    this.field.init(this.colAmount, this.rowAmount);
    this.stepsAmount = 0;
  }

  @action
  onRandomize() {
    this.field.init(this.colAmount, this.rowAmount);
    this.stepsAmount = 0;
  }
}
