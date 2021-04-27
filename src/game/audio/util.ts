import * as Tone from 'tone';
import { stream } from '../../lib/stream';
import { AutoGUI } from '../../lib/gui';
import { sample } from '../util';

export const beatTime = stream.of(0);

Tone.Transport.scheduleRepeat(time => {
  Tone.Draw.schedule(() => {
    beatTime((Tone.Transport.ticks / Tone.Transport.PPQ) % 1);
  }, time);
}, '64n');

export const currentBeatTime = () => Tone.Transport.ticks / Tone.Transport.PPQ;

type Note =
  | 'C'
  | 'C#'
  | 'D'
  | 'D#'
  | 'E'
  | 'F'
  | 'F#'
  | 'G'
  | 'G#'
  | 'A'
  | 'A#'
  | 'B';
const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const W = 2;
const H = 1;
const modes = {
  major: [W, W, H, W, W, W, H],
  minor: [W, H, W, W, H, W, W],
};

export const generateScale = () => {
  const rootNote = sample(notes);
  const rootIndex = notes.indexOf(rootNote);
  const mode = sample(Object.values(modes));

  const scale = [rootNote];
  let idx = rootIndex;
  mode.forEach(step => {
    idx = (idx + step) % notes.length;
    scale.push(notes[idx]);
  });

  return scale;
};

const rhythmPatterns = [
  [1],
  // [1, 0],
  // [1, 1, 0, 0]
];

export const generatePatterns = (
  scale: string[],
  octaveMin = 3,
  octaveMax = 4,
  length = 16
) => {
  const pattern = [];
  const rhythmPattern = sample(rhythmPatterns);
  for (let i = 0; i < length; i++) {
    const newVal = rhythmPattern[i % rhythmPattern.length]
      ? `${sample(scale)}${sample([octaveMin, octaveMax])}`
      : null;
    pattern.push(newVal);
  }
  return pattern;
};

export const addMixer = (
  gui: AutoGUI,
  name: string,
  defaultValue = 0.2
): Tone.Gain => {
  const gainNode = new Tone.Gain().toDestination();
  const value = gui.auto(defaultValue, name, 0, 1);
  stream.on((val: number) => gainNode.set({ gain: val }), value);
  return gainNode;
};
