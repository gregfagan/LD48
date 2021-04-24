export type Tetronimo = 'T' | 'O' | 'I' | 'L' | 'J' | 'S' | 'Z';
export type GameBoard = Grid<Tetronimo | null, 4, 4>;

// prettier-ignore
export const example: GameBoard = [
  [null, null, null, null],
  ['T',   'T',  'T', null],
  [null,  'T', null, null],
  [null, null, null, null],
];

//
// Utility types for constructing boards
//
export type Grid<Cell, Width extends number, Height extends number> = Tuple<
  Tuple<Cell, Width>,
  Height
>;

export type Tuple<T, N extends number> = N extends N
  ? number extends N
    ? T[]
    : _TupleOf<T, N, []>
  : never;

type _TupleOf<T, N extends number, R extends unknown[]> = R['length'] extends N
  ? R
  : _TupleOf<T, N, [T, ...R]>;
