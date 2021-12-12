export interface Cell { // TODO: Not interface?
  active: boolean;
}

export namespace Cell {
  export function New(): Cell {
    return { active: Math.random() >= 0.5 };
  }

  export function revertState(c: Cell) {
    c.active = !c.active;
  }
}
