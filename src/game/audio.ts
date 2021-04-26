import { gui as baseGui, pause } from './util';
import * as Tone from 'tone';
import { stream, filter } from '../lib/stream';
import { sample } from './util';
import { addMixer, generateScale, generatePatterns } from './audio/util';
import { generateBassSynth } from './audio/bass';
const gui = baseGui.addFolder('audio');

export const BPM = gui.auto(120, 'BPM', 60, 240);

const scale = generateScale();

export const currentBeat = stream.of(0);
Tone.Transport.scheduleRepeat(() => {
  currentBeat(currentBeat() + 1);
}, '4n');

export const downbeats = filter(
  Boolean,
  currentBeat.map(beat => beat % 8 === 0)
);

stream.on(bpm => (Tone.Transport.bpm.value = bpm), BPM);

stream.on(pauseState => {
  if (pauseState) {
    Tone.Transport.pause(Tone.now());
  } else {
    Tone.Transport.start(Tone.now());
  }
}, pause);

const drumGain = addMixer(gui, 'Drums', 0.4);
const distortion = new Tone.Distortion(4.2).connect(drumGain);
const drumSynth = new Tone.MembraneSynth().connect(distortion);
const drumLoop = new Tone.Sequence(
  (time, note) => {
    drumSynth.triggerAttackRelease(note, '4n', time);
  },
  ['C1', 'C1', 'C1', 'C1', 'C1', 'C1', 'C1', ['C1', 'C1', 'C1']]
);
drumLoop.loop = true;
drumLoop.playbackRate = 0.5;

// const patterns = [
//   ['E3', 'Gb3', 'A4', 'Gb4', 'A4', 'Gb3', 'B4', 'B3'],
//   ['E3', 'Gb3', 'A4', 'Gb4', 'A4', 'Gb3', 'B4', 'B3'],
//   ['E3', 'G#3', 'B4', 'G#4', 'B4', 'E3', 'Db4', 'B3'],
//   ['E3', 'Gb3', 'A4', 'Gb4', 'A4', 'B4', 'E3', 'Db4'],
//   ['Db3', 'Db3', 'E4', 'E4', 'Eb4', 'B4', 'E3', 'B3'],
// ];

const effectMixer = addMixer(gui, 'effect', 0.4);
const effectReverb = new Tone.Reverb(0.5).connect(effectMixer);
effectReverb.set({
  wet: 0.5,
});
const effectDelay = new Tone.PingPongDelay('16n', 0.4).connect(effectReverb);
effectDelay.set({
  wet: 0.5,
});
const effectSynth = new Tone.MonoSynth().connect(effectDelay);
effectSynth.oscillator.type = 'fmsine';
effectSynth.envelope.set({
  attack: 0.01,
  decay: 0.2,
});
effectSynth.filterEnvelope.set({
  attack: 0.01,
  decay: 0.2,
});

const effectPattern = generatePatterns(scale, 5, 6);

export const playSound = () => {
  effectSynth.triggerAttackRelease(sample(effectPattern), '16n', Tone.now());
};

const patterns = [
  generatePatterns(scale, 4, 5),
  generatePatterns(scale, 4, 4),
  generatePatterns(scale, 4, 5),
  generatePatterns(scale, 3, 5),
  generatePatterns(scale, 3, 6),
];

const arpGain = addMixer(gui, 'arp');
const arpDelay = new Tone.PingPongDelay('16n').connect(arpGain);
const delayLFO = new Tone.LFO('4m', 0, 1).connect(arpDelay.wet);
const arp = generateBassSynth().connect(arpDelay);
const arpPattern = new Tone.Pattern(
  (time, note) => {
    const duration = sample(['8n', '4n', '16n']);
    arp.triggerAttackRelease(note, duration, time);
  },
  sample(patterns),
  'up'
);
arpPattern.playbackRate = 2;

Tone.Transport.scheduleRepeat(() => {
  arpPattern.values = sample(patterns);
}, '4m');

const bass = generateBassSynth();

const bassPattern = new Tone.Pattern(
  (time, note) => {
    bass.triggerAttackRelease(note, '2n', time);
  },
  generatePatterns(scale, 1, 2, 4),
  'upDown'
);
bassPattern.playbackRate = 0.5;

export const start = async () => {
  Tone.start().then(() => {
    drumLoop.start(0);
    bassPattern.start(0);
    arpPattern.start(0);
  });
};

//['E2', 'Gb1', 'A2', 'Gb2'],
