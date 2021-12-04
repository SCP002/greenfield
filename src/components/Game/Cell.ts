export interface Cell {
  readonly active: boolean;
}

export namespace Cell {
  export function New(): Cell {
    return { active: Math.random() >= 0.5 };
  }

  export function revertState(cell: Cell): Cell {
    const c = { ...cell };
    c.active = !c.active;
    return c;
  }
}
