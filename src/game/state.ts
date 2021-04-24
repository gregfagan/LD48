import {
  GameBoard,
  emptyGameBoard,
  Tetronimo,
  I,
  J,
  T,
  L,
  Z,
  S,
  O,
  width,
  height,
} from './board';

import { tetronimoShapes, tetronimoSize } from './tetronimoes';

import { blit } from './util';
import { add, clampDimensions } from '../lib/math/vec2';

type Direction = [-1 | 0 | 1, -1 | 0 | 1];
export const Left: Direction = [0, -1];
export const Right: Direction = [0, 1];
export const Up: Direction = [-1, 0];
export const Down: Direction = [1, 0];

type TetronimoState = {
  tetronimo: Tetronimo;
  position: [0, 0];
};

type BoardState = {
  tetronimoes: TetronimoState[];
};

type State = {
  primaryBoard: BoardState;
  boards: BoardState[];
};

export const state: State = {
  primaryBoard: {
    tetronimoes: [
      {
        tetronimo: T,
        position: [0, 0],
      },
    ],
  },
  boards: [],
};

export const stateToGameBoard = (state: State): GameBoard => {
  let newBoard: GameBoard = emptyGameBoard;
  state.primaryBoard.tetronimoes.forEach(tetronimo => {
    newBoard = blit(
      newBoard,
      tetronimoShapes[tetronimo.tetronimo],
      tetronimo.position
    ) as GameBoard;
  });
  return newBoard;
};

export const moveTetronimo = (state: State, direction: Direction): State => {
  const newTetronimoes = state.primaryBoard.tetronimoes.map(tetronimoState => {
    const newPosition = add(tetronimoState.position, direction);
    const { width: tetronimoWidth, height: tetronimoHeight } = tetronimoSize(
      tetronimoState.tetronimo
    );

    return {
      ...tetronimoState,
      position: clampDimensions(
        height - tetronimoHeight,
        width - tetronimoWidth,
        newPosition
      ),
    } as TetronimoState;
  });

  return { ...state, primaryBoard: { tetronimoes: newTetronimoes } };
};
