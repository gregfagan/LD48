import {
  GameBoard,
  emptyGameBoard,
  fullGameBoard,
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
  FULL_BOARD,
  EMPTY_BOARD,
  stackSize,
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
  position: [number, number];
};

type BoardState = {
  tetronimoes: TetronimoState[];
  holes: TetronimoState[];
  walls: TetronimoState[];
  boardType: number;
};

type State = {
  playerBoard: BoardState;
  stack: BoardState[];
};

export const state: State = {
  playerBoard: {
    tetronimoes: [
      {
        tetronimo: T,
        position: [0, 0],
      },
    ],
    holes: [],
    walls: [],
    boardType: EMPTY_BOARD,
  },
  stack: [
    { tetronimoes: [], holes: [], walls: [], boardType: EMPTY_BOARD },
    { tetronimoes: [], holes: [], walls: [], boardType: EMPTY_BOARD },
    {
      tetronimoes: [],
      holes: [
        {
          tetronimo: T,
          position: [3, 2],
        },
      ],
      walls: [],
      boardType: FULL_BOARD,
    },
  ],
};

const tmpGenerateEmptyBoard = (): BoardState => {
  return { tetronimoes: [], holes: [], walls: [], boardType: EMPTY_BOARD };
};

const tmpGenerateHoleBoard = (): BoardState => {
  return {
    tetronimoes: [],
    holes: [
      {
        tetronimo: T,
        position: [2, 3],
      },
    ],
    walls: [],
    boardType: FULL_BOARD,
  };
};

export const stepStack = (state: State, stepId: number): State => {
  const newPlayerBoard = {
    tetronimoes: [
      ...state.playerBoard.tetronimoes,
      ...state.stack[0].tetronimoes,
    ],
    holes: [...state.stack[0].holes],
    walls: [...state.stack[0].walls],
    boardType: state.stack[0].boardType,
  };

  const newStack = [
    ...state.stack.slice(1),
    stepId % (stackSize + 1) === 0
      ? tmpGenerateHoleBoard()
      : tmpGenerateEmptyBoard(),
  ];

  return {
    playerBoard: newPlayerBoard,
    stack: newStack,
  };
};

export const stateToGameBoard = (boardState: BoardState): GameBoard => {
  let newBoard: GameBoard =
    boardState.boardType === FULL_BOARD ? fullGameBoard : emptyGameBoard;

  boardState.walls.forEach(tetronimo => {
    newBoard = blit(
      newBoard,
      tetronimoShapes[tetronimo.tetronimo],
      tetronimo.position,
      1
    ) as GameBoard;
  });

  boardState.holes.forEach(tetronimo => {
    newBoard = blit(
      newBoard,
      tetronimoShapes[tetronimo.tetronimo],
      tetronimo.position,
      0
    ) as GameBoard;
  });

  boardState.tetronimoes.forEach(tetronimo => {
    newBoard = blit(
      newBoard,
      tetronimoShapes[tetronimo.tetronimo],
      tetronimo.position,
      tetronimo.tetronimo
    ) as GameBoard;
  });

  return newBoard;
};

export const allStateToGameBoards = (state: State): GameBoard[] => {
  const gameBoards: GameBoard[] = [];

  gameBoards.push(stateToGameBoard(state.playerBoard));
  state.stack.forEach(boardState =>
    gameBoards.push(stateToGameBoard(boardState))
  );

  return gameBoards;
};

export const moveTetronimo = (state: State, direction: Direction): State => {
  const newTetronimoes = state.playerBoard.tetronimoes.map(tetronimoState => {
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

  return {
    ...state,
    playerBoard: { ...state.playerBoard, tetronimoes: newTetronimoes },
  };
};
