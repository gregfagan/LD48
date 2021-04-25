import { width, height } from './board';
import { Vec2 } from 'regl';
import { vec2 } from '../lib/math';

// prettier-ignore
export const I = 'I', J = 'J', L = 'L', O = 'O', S = 'S', T = 'T', Z = 'Z';
export const tetronimoes = [I, J, L, O, S, T, Z] as const;
export type Tetronimo = typeof tetronimoes[number];

export const tetronimoShapes = {
  I: [vec2.of(-1, 0), vec2.of(0, 0), vec2.of(1, 0), vec2.of(2, 0)],
  T: [vec2.of(-1, 0), vec2.of(0, 0), vec2.of(1, 0), vec2.of(0, 1)],
  J: [vec2.of(0, -1), vec2.of(0, 0), vec2.of(0, 1), vec2.of(-1, 1)],
  L: [vec2.of(0, -1), vec2.of(0, 0), vec2.of(0, 1), vec2.of(1, 1)],
  O: [vec2.of(0, 0), vec2.of(1, 0), vec2.of(0, 1), vec2.of(1, 1)],
  S: [vec2.of(0, 0), vec2.of(1, 0), vec2.of(-1, 1), vec2.of(0, 1)],
  Z: [vec2.of(-1, 0), vec2.of(0, 0), vec2.of(0, 1), vec2.of(1, 1)],
};

export const tetronimoPosition = (
  tetronimoId: Tetronimo,
  origin: Vec2
): Vec2[] => {
  const shape = tetronimoShapes[tetronimoId];
  return shape.map((position: Vec2) => vec2.add(origin, position));
};

export const randomTetronimoPosition = (tetronimoId: Tetronimo): Vec2 => {
  const minRow = 2;
  const maxRow = height - 2;
  const minColumn = 2;
  const maxColumn = width - 2;
  const row = Math.floor(Math.random() * maxRow) + minRow;
  const col = Math.floor(Math.random() * maxColumn) + minColumn;

  return vec2.of(col, row);
};
