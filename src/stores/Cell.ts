import { action, makeObservable, observable } from 'mobx';

export class Cell {
  @observable active = Math.random() >= 0.5;

  constructor() {
    makeObservable(this);
  }

  @action
  invert() {
    this.active = !this.active;
  }
}
