import {
  doesOverlap,
  moveInBounds,
  O,
  randomTetronimoPosition,
  Tetronimo,
  tetronimoes,
} from './tetronimoes';

import { vec2 } from '../lib/math';
import { Vec2 } from 'regl';
import { filter, log, stream } from '../lib/stream';
import { sample } from './util';
import { isPhrase, BPM, playGoodJobSound } from './audio';
import { randomInt } from 'fp-ts/lib/Random';

export const isDownbeat = (beat: number) => beat % 8 === 0;

export const Left: Vec2 = vec2.of(-1, 0);
export const Right: Vec2 = vec2.of(1, 0);
export const Up: Vec2 = vec2.of(0, -1);
export const Down: Vec2 = vec2.of(0, 1);

export const rotateTetronimo = (state: State, direction: number): State => ({
  ...state,
  tetronimoes: state.tetronimoes.map(ts =>
    // Don't rotate Os, they're fully symmetric
    ts.type === 'player' && ts.tetronimo !== O && !isDownbeat(state.currentBeat)
      ? moveInBounds({
          ...ts,
          rotation: (ts.rotation - direction + 4) % 4,
        } as TetronimoState)
      : ts
  ),
});

export const moveTetronimo = (state: State, direction: Vec2): State => ({
  ...state,
  tetronimoes: state.tetronimoes.map(ts =>
    ts.type === 'player' && !isDownbeat(state.currentBeat)
      ? moveInBounds({ ...ts, position: vec2.add(ts.position, direction) })
      : ts
  ),
});

export type TetronimoState = {
  tetronimo: Tetronimo;
  position: Vec2;
  type: 'player' | 'hole';
  rotation: 0 | 1 | 2 | 3;
  beat: number;
};

export type State = {
  tetronimoes: TetronimoState[];
  currentBeat: number;
};

export const randomTetronimoState = ({
  beat = 0,
  type = 'hole',
  tetronimo = sample(tetronimoes),
  position = randomTetronimoPosition(tetronimo),
  rotation = sample([0, 1, 2, 3]),
}: Partial<TetronimoState>) =>
  moveInBounds({
    tetronimo,
    position,
    rotation,
    type,
    beat,
  });

const startingBeat = -1;
const initialTetronimoState = randomTetronimoState({
  type: 'player',
  beat: startingBeat,
  tetronimo: sample(tetronimoes.filter(x => x !== 'O')),
  position: vec2.of(randomInt(3, 12)(), randomInt(8, 12)()),
});

const initialState = {
  tetronimoes: [initialTetronimoState],
  currentBeat: startingBeat,
};

const initialHoleLocation = sample([
  ['a', moveTetronimo(initialState, Left)] as const,
  ['d', moveTetronimo(initialState, Right)] as const,
  ['w', moveTetronimo(initialState, Up)] as const,
  ['s', moveTetronimo(initialState, Down)] as const,
  ['e', rotateTetronimo(initialState, 1)] as const,
  ['q', rotateTetronimo(initialState, -1)] as const,
] as const);

const initHole = initialHoleLocation[1];

initialState.tetronimoes.push({
  ...initialTetronimoState,
  ...initHole.tetronimoes[0],
  type: 'hole',
  beat: 0,
});

export const generateNewState = (beat = 0): State => {
  const initialTetronimoState = randomTetronimoState({
    type: 'player',
    beat,
  });
  return {
    tetronimoes: [
      initialTetronimoState,
      randomTetronimoState({
        tetronimo: initialTetronimoState.tetronimo,
        beat: 8,
      }),
    ],
    currentBeat: beat,
  };
};

const initialMovement = initialHoleLocation[0];
export { initialMovement };
export const state = stream.of<State>(initialState);
export const isGameRunning = stream.of<boolean>(false);

// Update for each beat
//  move player forward
//  update player tetronimo
//  remove old tetronimos
export const stepState = (s: State, beat: number): State => {
  let newState = {
    ...s,
    currentBeat: beat,
    tetronimoes: s.tetronimoes
      .map(ts =>
        ts.type === 'player'
          ? {
              ...ts,
              beat,
              // kind of hacky update to shape
              tetronimo: s.tetronimoes[s.tetronimoes.length - 1].tetronimo,
            }
          : ts
      )
      .filter(ts => ts.beat >= beat),
  };

  if (isDownbeat(beat)) {
    playGoodJobSound();
    newState = addHole(newState, beat);
  }

  if (isPhrase(beat)) {
    BPM(BPM() + 20);
  }

  return newState;
};

export const addHole = (s: State, beat: number): State => {
  // if (beat === 0) return s;
  return {
    ...s,
    tetronimoes: [
      ...s.tetronimoes,
      randomTetronimoState({ type: 'hole', beat: beat + 8 }),
    ],
  };
};

// Every downbeat we check wall collision
export const wallCollisions = filter(
  Boolean,
  state.map(s => {
    const player = s.tetronimoes[0];
    const hole = s.tetronimoes[1];
    const collided =
      s.currentBeat > 0 &&
      isDownbeat(s.currentBeat) &&
      player &&
      hole &&
      !doesOverlap(player, hole);
    return collided;
  })
);

stream.on(() => isGameRunning(false), wallCollisions);
