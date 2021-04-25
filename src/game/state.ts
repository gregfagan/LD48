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
  randomTetronimoPosition,
  blitTetronimo,
  tetronimoPosition,
} from './tetronimoes';

import { currentBeat } from './audio';
import * as vec2 from '../lib/math/vec2';

import { add } from '../lib/math/vec2';
import { Vec2 } from 'regl';
import { stream } from '../lib/stream';

export const Left: Vec2 = vec2.of(-1, 0);
export const Right: Vec2 = vec2.of(1, 0);
export const Up: Vec2 = vec2.of(0, -1);
export const Down: Vec2 = vec2.of(0, 1);

type TetronimoState = {
  tetronimo: Tetronimo;
  position: Vec2;
  type: 'player' | 'hole';
  rotation: 0 | 1 | 2 | 3;
  beat: number;
};

type State = {
  tetronimoes: TetronimoState[];
  currentBeat: number;
};

const tmpTetronimo = Z;

const initialState: State = {
  tetronimoes: [
    {
      tetronimo: tmpTetronimo,
      position: randomTetronimoPosition(tmpTetronimo),
      type: 'player',
      rotation: 0,
      beat: currentBeat(),
    },
  ],
  currentBeat: currentBeat(),
};

export const stepStack = (state: State, stepId: number): State => {
  const newTetronimos: TetronimoState[] = [];

  state.tetronimoes.forEach(tetronimoState => {
    if (tetronimoState.type === 'player') {
      newTetronimos.push({
        ...tetronimoState,
        beat: stepId,
      });
      return;
    }

    if (tetronimoState.beat >= stepId) {
      newTetronimos.push(tetronimoState);
    }
  });

  if (stepId % 8 === 0) {
    newTetronimos.push({
      tetronimo: tmpTetronimo,
      position: randomTetronimoPosition(tmpTetronimo),
      type: 'hole',
      rotation: 0,
      beat: stepId + 7,
    });
  }

  return {
    tetronimoes: newTetronimos,
    currentBeat: stepId,
  };
};

export const state = stream.of(initialState);

export const moveTetronimo = (state: State, direction: Vec2): State => {
  const newTetronimoes = state.tetronimoes.map(tetronimoState => {
    if (tetronimoState.type === 'player') {
      const newPosition = add(tetronimoState.position, direction);
      const newShape = tetronimoPosition(tetronimoState.tetronimo, newPosition);

      newPosition[0] = newShape.some(([x]) => x < 0 || x >= width)
        ? tetronimoState.position[0]
        : newPosition[0];

      newPosition[1] = newShape.some(([, y]) => y < 0 || y >= height)
        ? tetronimoState.position[1]
        : newPosition[1];

      return {
        ...tetronimoState,
        position: newPosition,
      } as TetronimoState;
    }

    return tetronimoState;
  });

  return {
    ...state,
    tetronimoes: newTetronimoes,
  };
};

export const allStateToGameBoards = (state: State): GameBoard[] => {
  let gameBoards = [];
  for (let i = 0; i < 8; i++) {
    const tetronimoes = state.tetronimoes.filter(tetronimoState => {
      return tetronimoState.beat === state.currentBeat + i;
    });
    let gameBoard: GameBoard;
    if (tetronimoes.length === 0) {
      gameBoard = emptyGameBoard;
    } else if (
      tetronimoes.some(tetronimoState => tetronimoState.type === 'hole')
    ) {
      gameBoard = fullGameBoard;
    } else {
      gameBoard = emptyGameBoard;
    }

    gameBoards.push(
      tetronimoes.reduce(
        (acc, tetronimoState) => blitTetronimo(tetronimoState, gameBoard),
        gameBoard
      )
    );
  }

  return gameBoards;
};
