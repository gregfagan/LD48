import { stream } from '../lib/stream';
import { keys, pause } from './util';
import { start, beat } from './audio';
import {
  state,
  Left,
  Right,
  Up,
  Down,
  moveTetronimo,
  stepStack,
} from './state';

export { render } from './render';

// initial state
let toneStarted = false;

// update on beat
stream.on(currentBeat => state(stepStack(state(), currentBeat)), beat);

// respond to input
keys.map(key => {
  if (key.a) state(moveTetronimo(state(), Left));
  if (key.s) state(moveTetronimo(state(), Down));
  if (key.d) state(moveTetronimo(state(), Right));
  if (key.w) state(moveTetronimo(state(), Up));
  if (key[' ']) {
    if (!toneStarted) {
      start();
      toneStarted = true;
    }
    pause(!pause());
  }
});
