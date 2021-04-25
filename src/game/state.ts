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

import {
  tetronimoShapes,
  tetronimoSize,
  randomTetronimoPosition,
} from './tetronimoes';

import { blit } from './util';
import { add, clampDimensions } from '../lib/math/vec2';
import { range } from 'fp-ts/lib/ReadonlyArray';
import { Vec2 } from 'regl';
import { stream } from '../lib/stream';

type Direction = [-1 | 0 | 1, -1 | 0 | 1];
export const Left: Direction = [0, -1];
export const Right: Direction = [0, 1];
export const Up: Direction = [-1, 0];
export const Down: Direction = [1, 0];

type TetronimoState = {
  tetronimo: Tetronimo;
  position: Vec2;
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

const initialState: State = {
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
    // empty starting stack
    ...range(0, stackSize - 1).map(() => ({
      tetronimoes: [],
      holes: [],
      walls: [],
      boardType: EMPTY_BOARD,
    })),
  ],
};

export const state = stream.of(initialState);

const tmpGenerateEmptyBoard = (): BoardState => {
  return { tetronimoes: [], holes: [], walls: [], boardType: EMPTY_BOARD };
};

const tmpGenerateHoleBoard = (
  existingTetronimos: TetronimoState[]
): BoardState => {
  const tetronimos = existingTetronimos.map(tetronimo => tetronimo.tetronimo);

  return {
    tetronimoes: [],
    holes: tetronimos.map(tetronimoId => {
      return {
        tetronimo: tetronimoId,
        position: randomTetronimoPosition(tetronimoId),
      } as TetronimoState;
    }),
    walls: [],
    boardType: FULL_BOARD,
  };
};

export const stepStack = (state: State, stepId: number): State => {
  const newPlayerBoard = {
    ...state.stack[0],
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
    stepId % 8 === 0
      ? tmpGenerateHoleBoard(newPlayerBoard.tetronimoes)
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
