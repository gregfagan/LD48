import { dt, gui as baseGui, pause } from './util';
import * as Tone from 'tone';
import { stream } from '../lib/stream';

const gui = baseGui.addFolder('audio');

export const BPM = gui.auto(120, 'BPM', 60, 240);

stream.on(bpm => (Tone.Transport.bpm.value = bpm), BPM);

stream.on(pauseState => {
  if (pauseState) {
    Tone.Transport.pause(Tone.now());
  } else {
    Tone.Transport.start(Tone.now());
  }
}, pause);

export const start = async () => {
  return Tone.start();
};

const synth = new Tone.Synth().toDestination();
const loop = new Tone.Pattern(
  (time, note) => {
    synth.triggerAttackRelease(note, '4n');
  },
  ['C5', 'C4', 'C4', 'C4', 'C4', 'C4', 'B3', 'G#3']
).start(0);
