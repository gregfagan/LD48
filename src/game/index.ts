import { Regl } from 'regl';
import { stream } from '../lib/stream';
import { render } from './render';
import { clock, keys } from './util';
import {
  state,
  allStateToGameBoards,
  Left,
  Right,
  Up,
  Down,
  moveTetronimo,
  stepStack,
} from './state';

// Beats to count in
const countIn = 1;
let stepId = 0 - countIn;
let boardState = state;
let playBoard = allStateToGameBoards(boardState);

export const draw = (regl: Regl) => {
  // create a board renderer
  const board = render(regl);

  // update the board when the clock ticks
  stream.on(() => {
    board.update(playBoard);
  }, clock);

  keys
    .map(key => {
      if (key.a) {
        boardState = moveTetronimo(boardState, Left);
      }

      if (key.s) {
        boardState = moveTetronimo(boardState, Down);
      }

      if (key.d) {
        boardState = moveTetronimo(boardState, Right);
      }

      if (key.w) {
        boardState = moveTetronimo(boardState, Up);
      }

      if (key.r) {
        stepId++;
        boardState = stepStack(boardState, stepId);
      }
    })
    .map(() => {
      playBoard = allStateToGameBoards(boardState);
    });

  // return the draw command
  return regl(board.draw);
};
