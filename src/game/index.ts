import { keys, pause } from './util';
import { keypress } from '../lib/stream/dom';
import { start, playSound } from './audio';
import {
  state,
  Left,
  Right,
  Up,
  Down,
  moveTetronimo,
  rotateTetronimo,
} from './state';

export { draw } from './render';

// initial state
let toneStarted = false;

keypress('a').map(playSound);
keypress('s').map(playSound);
keypress('d').map(playSound);
keypress('q').map(playSound);
keypress('w').map(playSound);
keypress('e').map(playSound);

// respond to input
keys.map(key => {
  if (key.a) state(moveTetronimo(state(), Left));
  if (key.s) state(moveTetronimo(state(), Down));
  if (key.d) state(moveTetronimo(state(), Right));
  if (key.w) state(moveTetronimo(state(), Up));
  if (key.e) state(rotateTetronimo(state(), 1));
  if (key.q) state(rotateTetronimo(state(), -1));
  if (key[' ']) {
    if (!toneStarted) {
      start();
      toneStarted = true;
    }
    pause(!pause());
  }
});
