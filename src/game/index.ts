import { Regl } from 'regl';
import { stream } from '../lib/stream';
import { render } from './render';
import { clock, keys, dt } from './util';
import { BPM, trigger, start } from './audio';
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

let toneStarted = false;

// Beats to count in
const countIn = 1;
let stepId = 0 - countIn;
let boardState = state;
let playBoard = allStateToGameBoards(boardState);

let counter = 0;

export const draw = (regl: Regl) => {
  // create a board renderer
  const board = render(regl);

  // update the board when the clock ticks
  stream.on(() => {
    board.update(playBoard);
  }, clock);

  stream.on(() => {
    counter += dt();
    if (counter > 1 / (BPM() / 60)) {
      stepId++;
      counter = 0;
      boardState = stepStack(boardState, stepId);
      playBoard = allStateToGameBoards(boardState);
      if (toneStarted) {
        trigger(stepId);
      }
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

      return key;
    })
    .map(keyMap => {
      if (!toneStarted && Object.keys(keyMap).length) {
        start();
        toneStarted = true;
      }
      playBoard = allStateToGameBoards(boardState);
    });

  // return the draw command
  return regl(board.draw);
};
