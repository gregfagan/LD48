// prettier-ignore
export const I = 'I', J = 'J', L = 'L', O = 'O', S = 'S', T = 'T', Z = 'Z';
export const tetronimoes = [I, J, L, O, S, T, Z] as const;
export type Tetronimo = typeof tetronimoes[number];

export const isTetronimo = (t: any): t is Tetronimo =>
  tetronimoes.indexOf(t) > -1;

export const width = 6;
export const height = 5;
export type Width = typeof width;
export type Height = typeof height;

export type Hole = 0;
export type Wall = 1;

export type GameBoard = Grid<Tetronimo | Hole | Wall, Width, Height>;

export const example: GameBoard = [
  [T, I, I, I, I, J],
  [T, T, 0, S, S, J],
  [T, Z, S, S, J, J],
  [Z, Z, 0, L, O, O],
  [Z, L, L, L, O, O],
];

//
// Utility types for constructing boards
//
export type Grid<Cell, Width extends number, Height extends number> = Tuple<
  Tuple<Cell, Width>,
  Height
>;

export type ResizedGrid<
  Input,
  NewWidth extends number,
  NewHeight extends number
> = Input extends Grid<infer T, any, any>
  ? Grid<T, NewWidth, NewHeight>
  : never;

export type Tuple<T, N extends number> = N extends N
  ? number extends N
    ? T[]
    : _TupleOf<T, N, []>
  : never;

type _TupleOf<T, N extends number, R extends unknown[]> = R['length'] extends N
  ? R
  : _TupleOf<T, N, [T, ...R]>;
