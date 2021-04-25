import { Regl } from 'regl';
import { stream } from '../lib/stream';
import { render } from './render';
import { clock, keys } from './util';
import { trigger, start, beat } from './audio';
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

let toneStarted = false;

// Beats to count in
let boardState = state;
let playBoard = allStateToGameBoards(boardState);

export const draw = (regl: Regl) => {
  // create a board renderer
  const board = render(regl);

  // update the board when the clock ticks
  stream.on(() => {
    board.update(playBoard);
  }, clock);

  stream.on(currentBeat => {
    boardState = stepStack(boardState, currentBeat);
    playBoard = allStateToGameBoards(boardState);
    if (toneStarted) {
      trigger(currentBeat);
    }
  }, beat);

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
