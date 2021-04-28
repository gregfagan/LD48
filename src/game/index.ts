import { clock, dt, keys, pause } from './util';
import { keypress } from '../lib/stream/dom';
import { playSound, currentBeat, initializeAudio, BPM } from './audio';
import {
  state,
  Left,
  Right,
  Up,
  Down,
  moveTetronimo,
  rotateTetronimo,
  generateNewState,
  stepState,
  isGameRunning,
  wallCollisions,
  initialMovement,
} from './state';
import {
  dropRepeats,
  event,
  everyNth,
  filter,
  log,
  sample,
  stream,
} from '../lib/stream';
export { draw } from './render';
import './ui';
import { beatTime } from './audio/util';
import { not } from 'ramda';

let destroyAudio: Function;
// This stream "debounces" the end of the game so that if the
// player is mashing the buttons, they don't immediately skip
// into a new game.
const canStartNewGame = stream.of(true);
stream.on(() => {
  destroyAudio();
  canStartNewGame(false);
  setTimeout(() => canStartNewGame(true), 750);
}, wallCollisions);

const startNewGame = (pressedKey: string) => {
  if (state().currentBeat > 0) {
    state(generateNewState());
    isGameRunning(true);
    destroyAudio = initializeAudio();
  } else if (pressedKey === initialMovement) {
    isGameRunning(true);
    destroyAudio = initializeAudio();
    move();
  }

  if (isGameRunning()) BPM(100);
};

// Respond to the main controls
[
  keypress('a'),
  keypress('s'),
  keypress('d'),
  keypress('q'),
  keypress('w'),
  keypress('e'),
]
  .reduce(stream.merge)
  .map(({ key }) => {
    if (!isGameRunning()) {
      if (canStartNewGame()) startNewGame(key);
    }

    if (isGameRunning() && (key === 'q' || key === 'e')) {
      playSound();
      if (key === 'e') state(rotateTetronimo(state(), 1));
      if (key === 'q') state(rotateTetronimo(state(), -1));
    }
  });

const noRepeatKeydowns = ['a', 's', 'd', 'w']
  .map(key => filter(Boolean, dropRepeats(keys.map(m => m[key]))))
  .reduce(stream.merge);

const allKeysOff = dropRepeats(
  keys.map(m => m.a || m.s || m.d || m.w).map(not)
);

const repeating = stream.combine(
  (down, up, self, changed) => {
    if (changed.includes(down)) return true;
    if (changed.includes(up)) return false;
  },
  [noRepeatKeydowns, allKeysOff]
);

const repeatTime = 4 / 60;
let repeatTimeCount = 0;
const repeatTick = stream.combine(
  dt => {
    repeatTimeCount += dt();
    if (repeatTimeCount > repeatTime) {
      repeatTimeCount -= repeatTime;
      return true;
    }
  },
  [dt]
);

const repeat = sample(keys, repeatTick);

const delayedRepeating = filter(
  (total: number) => total > 1,
  stream.scan(total => (repeating() ? total + 1 : 0), 0, repeat)
);

const move = () => {
  if (!isGameRunning()) return;
  playSound();
  const key = keys();
  if (key.a) state(moveTetronimo(state(), Left));
  if (key.s) state(moveTetronimo(state(), Down));
  if (key.d) state(moveTetronimo(state(), Right));
  if (key.w) state(moveTetronimo(state(), Up));
};

stream.on(move, noRepeatKeydowns);
stream.on(move, delayedRepeating);

// Update game, but only when it's running, on the current beat.
stream.on(
  () => state(stepState(state(), state().currentBeat + 1)),
  filter(() => isGameRunning(), currentBeat)
);
