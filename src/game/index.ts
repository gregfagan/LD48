import { Regl } from 'regl';
import { stream } from '../lib/stream';
import { render } from './render';
import { clock, keys, dt } from './util';
import { BPM } from './audio';
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
import { delta } from '../lib/stream/time';

let boardState = state;
let playBoard = allStateToGameBoards(boardState);
let stepId = 0;

let beat = 0;

export const draw = (regl: Regl) => {
  // create a board renderer
  const board = render(regl);

  // update the board when the clock ticks
  stream.on(() => {
    board.update(playBoard);
  }, clock);

  stream.on(() => {
    beat += dt();
    if (beat > 1 / (BPM() / 60)) {
      stepId++;
      beat = 0;
      boardState = stepStack(boardState, stepId);
      playBoard = allStateToGameBoards(boardState);
    }
  }, dt);

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
