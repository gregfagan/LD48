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
import { isDownbeat, isPhrase, BPM } from './audio';

export const Left: Vec2 = vec2.of(-1, 0);
export const Right: Vec2 = vec2.of(1, 0);
export const Up: Vec2 = vec2.of(0, -1);
export const Down: Vec2 = vec2.of(0, 1);

export type TetronimoState = {
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

const randomTetronimoState = ({
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

export const generateInitialState = (beat = 0): State => {
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

export const state = stream.of(generateInitialState());
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
    newState = addHole(newState, beat);
  }

  if (isPhrase(beat)) {
    console.log('here', beat);
    BPM(BPM() + 20);
  }

  return newState;
};

export const addHole = (s: State, beat: number): State => {
  if (beat === 0) return s;
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

export const rotateTetronimo = (state: State, direction: number): State => ({
  ...state,
  tetronimoes: state.tetronimoes.map(ts =>
    // Don't rotate Os, they're fully symmetric
    ts.type === 'player' && ts.tetronimo !== O
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
    ts.type === 'player'
      ? moveInBounds({ ...ts, position: vec2.add(ts.position, direction) })
      : ts
  ),
});
