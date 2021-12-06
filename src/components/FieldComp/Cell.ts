export interface Cell {
  readonly initialActive: boolean;
}

export namespace Cell {
  export function New(): Cell {
    return { initialActive: Math.random() >= 0.5 };
  }
}
