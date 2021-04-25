import { dt, gui as baseGui, pause } from './util';
import * as Tone from 'tone';
import { stream } from '../lib/stream';

const gui = baseGui.addFolder('audio');

export const BPM = gui.auto(120, 'BPM', 60, 240);

export const currentBeat = stream.of(0);
Tone.Transport.scheduleRepeat(() => {
  currentBeat(currentBeat() + 1);
}, '4n');

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

const synth = new Tone.MembraneSynth().toDestination();
const drumLoop = new Tone.Part(
  (time, note) => {
    synth.triggerAttackRelease(note, '4n');
  },
  [
    [0, 'A1'],
    ['0:1:0', 'C1'],
    ['0:2:0', 'C1'],
    ['0:3:0', 'C1'],
    ['1:0:0', 'C1'],
    ['1:1:0', 'C1'],
    ['1:2:0', 'C1'],
    ['1:3:0', 'C1'],
  ]
);

drumLoop.loop = true;
drumLoop.loopEnd = '2m';
drumLoop.start(0);
