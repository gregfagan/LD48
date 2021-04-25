import { dt, gui as baseGui, pause } from './util';
import * as Tone from 'tone';
import { stream } from '../lib/stream';
import { times } from 'ramda';

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

const reverb = new Tone.Reverb(0.8).toDestination();
new Tone.Signal(0.5).connect(reverb.wet);
const distortion = new Tone.Distortion(1.2).toDestination();
const drumSynth = new Tone.MembraneSynth().connect(distortion);
const drumLoop = new Tone.Part(
  (time, note) => {
    drumSynth.triggerAttackRelease(note, '4n');
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

const arpDelay = new Tone.PingPongDelay('16n').toDestination();
const delayLFO = new Tone.LFO('3m').connect(arpDelay.wet);
const arp = new Tone.MonoSynth().connect(arpDelay);
const arpPattern = new Tone.Pattern(
  (time, note) => {
    arp.triggerAttackRelease(note, '8n');
  },
  [
    'E3',
    'Gb3',
    'A4',
    'Gb4',
    'A4',
    'Gb3',
    'B4',
    'B3',
    'E3',
    'Gb3',
    'A4',
    'Gb4',
    'A4',
    'Gb3',
    'B4',
    'B3',
    'E3',
    'G#3',
    'B4',
    'G#4',
    'B4',
    'E3',
    'Db4',
    'B3',
    'E3',
    'Gb3',
    'A4',
    'Gb4',
    'A4',
    'B4',
    'E3',
    'Db4',
  ],
  'up'
);
arpPattern.playbackRate = 2;
arpPattern.start(0);

const bass = new Tone.MonoSynth().connect(distortion);
const bassPattern = new Tone.Pattern(
  (time, note) => {
    bass.triggerAttackRelease(note, '2n');
  },
  ['E2', 'Gb1', 'A2', 'Gb2'],
  'upDown'
);
bassPattern.playbackRate = 0.5;
bassPattern.start(0);
