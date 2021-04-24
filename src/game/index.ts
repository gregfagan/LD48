import { Regl } from 'regl';
import { glsl } from '../lib/gl/regl';
import { stream } from '../lib/stream';
import { example } from './board';
import { render } from './render';
import { clock, keys } from './util';
import {
  state,
  stateToGameBoard,
  Left,
  Right,
  Up,
  Down,
  moveTetronimo,
} from './state';

let boardState = state;
let playBoard = stateToGameBoard(boardState);

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
    })
    .map(() => {
      playBoard = stateToGameBoard(boardState);
    });

  // return the draw command
  return regl(board.draw);
};
