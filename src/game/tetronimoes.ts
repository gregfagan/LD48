import { width, height } from './board';
import { Vec2 } from 'regl';
import { vec2 } from '../lib/math';
import { TetronimoState } from './state';

// prettier-ignore
export const I = 'I', J = 'J', L = 'L', O = 'O', S = 'S', T = 'T', Z = 'Z';
export const tetronimoes = [I, J, L, O, S, T, Z] as const;
export type Tetronimo = typeof tetronimoes[number];

export type BlockPositions = [Vec2, Vec2, Vec2, Vec2];

export const tetronimoShapes: Record<Tetronimo, BlockPositions> = {
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

const rotations = [
  [1, 0, 0, 1],
  [0, -1, 1, 0],
  [-1, 0, 0, -1],
  [0, 1, -1, 0],
] as const;

export const transform = (ts: TetronimoState) =>
  tetronimoShapes[ts.tetronimo].map(v =>
    vec2.add(vec2.transformMat2(v, rotations[ts.rotation]), ts.position)
  ) as BlockPositions;

const boundingBox = (blocks: BlockPositions): [Vec2, Vec2] =>
  blocks.reduce(
    ([[minX, minY], [maxX, maxY]], [x, y]) => [
      [Math.min(minX, x), Math.min(minY, y)],
      [Math.max(maxX, x), Math.max(maxY, y)],
    ],
    [
      [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
      [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER],
    ]
  );

export const moveInBounds = (ts: TetronimoState): TetronimoState => {
  const bounds = boundingBox(transform(ts));
  const minAdjust = vec2.max(vec2.zero(), vec2.sub(vec2.zero(), bounds[0]));
  const maxAdjust = vec2.negate(
    vec2.max(vec2.zero(), vec2.sub(bounds[1], vec2.of(width - 1, height - 1)))
  );

  return {
    ...ts,
    position: vec2.add(ts.position, vec2.add(minAdjust, maxAdjust)),
  };
};
