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

type Direction = [-1 | 0 | 1, -1 | 0 | 1];
export const Left: Direction = [0, -1];
export const Right: Direction = [0, 1];
export const Up: Direction = [-1, 0];
export const Down: Direction = [1, 0];

type TetronimoState = {
  tetronimo: Tetronimo;
  originRow: number;
  originColumn: number;
};

type State = {
  tetronimoes: TetronimoState[];
};

export const state: State = {
  tetronimoes: [
    {
      tetronimo: T,
      originRow: 0,
      originColumn: 0,
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
  rowIndex: number,
  columnIndex: number
): GameBoard => {
  return board.map((row, rIdx) => {
    const newRow = board[rowIndex].map((column, cIdx) => {
      return drawTetronimo(tetronimo, rIdx - rowIndex, cIdx - columnIndex)
        ? tetronimo
        : column;
    });

    return newRow;
  }) as GameBoard;
};

export const stateToGameBoard = (state: State): GameBoard => {
  let newBoard: GameBoard = emptyGameBoard;
  state.tetronimoes.forEach(tetronimo => {
    newBoard = addTetronimo(
      newBoard,
      tetronimo.tetronimo,
      tetronimo.originRow,
      tetronimo.originColumn
    );
  });
  return newBoard;
};

export const moveTetronimo = (state: State, direction: Direction): State => {
  const newTetronimoes = state.tetronimoes.map(tetronimoState => {
    const newOriginRow = tetronimoState.originRow + direction[0];
    const newOriginColumn = tetronimoState.originColumn + direction[1];
    const { width: tetronimoWidth, height: tetronimoHeight } = tetronimoSize(
      tetronimoState.tetronimo
    );

    const canMoveVertical =
      newOriginRow >= 0 && newOriginRow + tetronimoHeight <= height;
    const canMoveHorizontal =
      newOriginColumn >= 0 && newOriginColumn + tetronimoWidth <= width;

    return {
      ...tetronimoState,
      originRow: canMoveVertical ? newOriginRow : tetronimoState.originRow,
      originColumn: canMoveHorizontal
        ? newOriginColumn
        : tetronimoState.originColumn,
    };
  });

  return { ...state, tetronimoes: newTetronimoes };
};
