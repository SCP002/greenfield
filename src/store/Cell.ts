import { action, makeObservable, observable } from 'mobx';

export class Cell {
  active = Math.random() >= 0.5;

  constructor() {
    makeObservable(
      this,
      {
        active: observable,
        invert: action,
      },
      { name: Cell.name }
    );
  }

  invert() {
    this.active = !this.active;
  }
}
