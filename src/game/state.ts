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

type Direction = [-1 | 0 | 1, -1 | 0 | 1];
export const Left: Direction = [0, -1];
export const Right: Direction = [0, 1];
export const Up: Direction = [-1, 0];
export const Down: Direction = [1, 0];

type TetronimoState = {
  tetronimo: Tetronimo;
  position: [0, 0];
};

type State = {
  tetronimoes: TetronimoState[];
};

export const state: State = {
  tetronimoes: [
    {
      tetronimo: T,
      position: [0, 0],
    },
  ],
};

const drawTetronimo = (tetronimo: Tetronimo, row: number, column: number) => {
  const shape = tetronimoShapes[tetronimo];
  return shape[row] && shape[row][column];
};

export const addTetronimo = (
  board: GameBoard,
  tetronimo: Tetronimo,
  position: Direction
): GameBoard => {
  return blit(board, tetronimoShapes[tetronimo], position) as GameBoard;
};

export const stateToGameBoard = (state: State): GameBoard => {
  let newBoard: GameBoard = emptyGameBoard;
  state.tetronimoes.forEach(tetronimo => {
    newBoard = addTetronimo(newBoard, tetronimo.tetronimo, tetronimo.position);
  });
  return newBoard;
};

export const moveTetronimo = (state: State, direction: Direction): State => {
  const newTetronimoes = state.tetronimoes.map(tetronimoState => {
    const newOriginRow = tetronimoState.position[0] + direction[0];
    const newOriginColumn = tetronimoState.position[1] + direction[1];
    const { width: tetronimoWidth, height: tetronimoHeight } = tetronimoSize(
      tetronimoState.tetronimo
    );

    const canMoveVertical =
      newOriginRow >= 0 && newOriginRow + tetronimoHeight <= height;
    const canMoveHorizontal =
      newOriginColumn >= 0 && newOriginColumn + tetronimoWidth <= width;

    const newRow = canMoveVertical ? newOriginRow : tetronimoState.position[0];
    const newColumn = canMoveHorizontal
      ? newOriginColumn
      : tetronimoState.position[1];

    return {
      ...tetronimoState,
      position: [newRow, newColumn],
    } as TetronimoState;
  });

  return { ...state, tetronimoes: newTetronimoes };
};
