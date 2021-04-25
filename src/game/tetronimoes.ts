import {
  I,
  T,
  J,
  L,
  S,
  Z,
  O,
  width,
  height,
  Tetronimo,
  GameBoard,
} from './board';
import { Vec2 } from 'regl';
import * as vec2 from '../lib/math/vec2';

export const tetronimoShapes = {
  I: [vec2.of(-1, 0), vec2.of(0, 0), vec2.of(1, 0), vec2.of(2, 0)],
  T: [vec2.of(-1, 0), vec2.of(0, 0), vec2.of(1, 0), vec2.of(0, 1)],
  J: [vec2.of(0, 1), vec2.of(0, 0), vec2.of(-1, -1), vec2.of(0, -1)],
  L: [vec2.of(1, 0), vec2.of(0, 0), vec2.of(0, -1), vec2.of(1, -1)],
  O: [vec2.of(0, 0), vec2.of(1, 0), vec2.of(0, 1), vec2.of(1, 1)],
};

export const tetronimoBounds = (tetronimoId: Tetronimo) => {
  const shape = tetronimoShapes[tetronimoId];
  const left: number = shape.reduce(
    (acc: number, position: Vec2) =>
      position[0] < 0 ? acc + position[0] : acc,
    0
  );
  const right: number = shape.reduce(
    (acc: number, position: Vec2) =>
      position[0] > 0 ? acc + position[0] : acc,
    0
  );
  const top: number = shape.reduce(
    (acc: number, position: Vec2) =>
      position[1] < 0 ? acc + position[1] : acc,
    0
  );
  const bottom: number = shape.reduce(
    (acc: number, position: Vec2) =>
      position[1] > 0 ? acc + position[1] : acc,
    0
  );

  return { left, right, top, bottom };
};

export const randomTetronimoPosition = (tetronimoId: Tetronimo): Vec2 => {
  const { left, right, top, bottom } = tetronimoBounds(tetronimoId);

  const minRow = 0 - top;
  const maxRow = height - bottom;
  const minColumn = 0 - left;
  const maxColumn = width - right;
  const row = Math.floor(Math.random() * maxRow) + minRow;
  const col = Math.floor(Math.random() * maxColumn) + minColumn;

  return vec2.of(col, row);
};

export const blitTetronimo = (tetronimoState, gameBoard) => {
  const origin = tetronimoState.position;
  const shape = tetronimoShapes[tetronimoState.tetronimo];
  const translatedShape = shape.map((position: Vec2) =>
    vec2.add(position, origin)
  );
  const newBoard = gameBoard.map((row, y) =>
    row.map((column, x) => {
      if (
        translatedShape.some(position => vec2.equals(position, vec2.of(x, y)))
      ) {
        return tetronimoState.type === 'hole' ? 0 : tetronimoState.tetronimo;
      }
      return tetronimoState.type === 'hole' ? 1 : 0;
    })
  );

  return newBoard;
};
