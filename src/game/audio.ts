import { gui as baseGui, pause } from './util';
import * as Tone from 'tone';
import { stream, filter, event } from '../lib/stream';
import { sample } from './util';
import { addMixer, generateScale, generatePatterns } from './audio/util';
import { generateBassSynth } from './audio/bass';
import { isGameRunning } from './state';
const gui = baseGui.addFolder('audio');

export const BPM = gui.auto(120, 'BPM', 60, 240);

const scale = generateScale();

export const currentBeat = stream.of(0);
Tone.Transport.scheduleRepeat(() => {
  currentBeat(currentBeat() + 1);
}, '4n');
export const isDownbeat = (beat: number) => beat % 8 === 0;
export const downbeats = filter(Boolean, currentBeat.map(isDownbeat));

stream.on(bpm => (Tone.Transport.bpm.value = bpm), BPM);

const isAudioPaused = stream.combine(
  (pause, isGameRunning) => pause() || !isGameRunning(),
  [pause, isGameRunning]
);

stream.on(pauseState => {
  if (pauseState) {
    Tone.Transport.pause(Tone.now());
  } else {
    Tone.Transport.start(Tone.now());
  }
}, isAudioPaused);

const drumGain = addMixer(gui, 'Drums', 0.4);
const distortion = new Tone.Distortion(4.2).connect(drumGain);
const drumSynth = new Tone.MembraneSynth().connect(distortion);
const drumLoop = new Tone.Sequence(
  (time, note) => {
    drumSynth.triggerAttackRelease(note, '4n', time);
  },
  ['C1', 'C1', 'C1', ['C1', 'C1'], 'C1', 'C1', 'C1', ['C1', 'C1', 'C1']]
);
drumLoop.loop = true;
drumLoop.playbackRate = 0.5;

const hatGain = addMixer(gui, 'Hats', 0.2);
const hatSynth = new Tone.NoiseSynth().connect(hatGain);
const hatLoop = new Tone.Sequence(
  (time, note) => {
    hatSynth.triggerAttackRelease('32n', time);
  },
  ['C3', 'C3', 'C3', 'C3', 'C3', 'C3', ['C4', 'C4'], ['C4', 'C4', 'C4']]
);
hatLoop.loop = true;

Tone.Transport.scheduleRepeat(() => {
  hatSynth.volume.set({ value: sample([-60, -6]) });
}, '4m');

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
const delayLFO = new Tone.LFO('4m', 0.25, 0.5).connect(arpDelay.wet);
delayLFO.start(0);
const arp = generateBassSynth().connect(arpDelay);
const arpPattern = new Tone.Pattern(
  (time, note) => {
    const duration = sample(['8n', '4n', '16n']);
    arp.triggerAttackRelease(note, duration, time);
  },
  sample(patterns),
  sample(['up', 'upDown'])
);
arpPattern.playbackRate = sample([1, 2, 4]);

Tone.Transport.scheduleRepeat(() => {
  arpPattern.values = sample(patterns);
}, '4m');

const bass = generateBassSynth();

const bassPattern = new Tone.Pattern(
  (time, note) => {
    bass.triggerAttackRelease(note, '2n', time);
  },
  generatePatterns(scale, 1, 2, 4),
  sample(['up', 'upDown'])
);
bassPattern.playbackRate = 0.5;

export const start = async () => {
  Tone.start().then(() => {
    drumLoop.start(0);
    bassPattern.start(0);
    arpPattern.start(0);
    hatLoop.start(0);
  });
};

// Start audio on the first keydown event
const e = event(document, 'keydown');
stream.on(() => {
  start();
  e.end(true);
}, e);

//['E2', 'Gb1', 'A2', 'Gb2'],
