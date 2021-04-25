import {
  moveInBounds,
  O,
  randomTetronimoPosition,
  Tetronimo,
  tetronimoes,
} from './tetronimoes';

import { currentBeat } from './audio';
import { vec2 } from '../lib/math';
import { Vec2 } from 'regl';
import { stream } from '../lib/stream';
import { sample } from './util';

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

const randomTetronimoShape = () => sample(tetronimoes);

const randomTetronimoState = ({
  beat = 0,
  type = 'hole',
  tetronimo = randomTetronimoShape(),
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

const initialTetronimoState = randomTetronimoState({
  type: 'player',
  beat: currentBeat(),
});
const initialState: State = {
  tetronimoes: [
    initialTetronimoState,
    randomTetronimoState({
      tetronimo: initialTetronimoState.tetronimo,
      beat: 7,
    }),
  ],
  currentBeat: currentBeat(),
};

export const stepStack = (state: State, stepId: number): State => {
  const newHole =
    stepId > 0 &&
    stepId % 8 === 0 &&
    randomTetronimoState({ type: 'hole', beat: stepId + 7 });
  const newTetronimos: TetronimoState[] = [...state.tetronimoes]
    .map(t =>
      t.type === 'player'
        ? {
            ...t,
            beat: stepId,
            tetronimo: newHole ? newHole.tetronimo : t.tetronimo,
          }
        : t
    )
    .filter(t => t.beat >= stepId);

  return {
    tetronimoes: newHole ? [...newTetronimos, newHole] : newTetronimos,
    currentBeat: stepId,
  };
};

export const state = stream.of(initialState);

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
