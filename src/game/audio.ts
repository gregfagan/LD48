import { gui as baseGui, pause } from './util';
import * as Tone from 'tone';
import { stream, filter, event } from '../lib/stream';
import { sample } from './util';
import {
  addMixer,
  generateScale,
  generatePatterns,
  startBeatTime,
} from './audio/util';
import { monoBassSynth } from './audio/bass';
import { isGameRunning } from './state';
import { PolySynth } from 'tone';
const gui = baseGui.addFolder('audio');

export const BPM = gui.auto(100, 'BPM', 60, 240);
let scale = generateScale();

export const currentBeat = stream.of(0);

const startBeatCount = () => {
  Tone.Transport.scheduleRepeat(() => {
    currentBeat(currentBeat() + 1);
  }, '4n');
};
export const isDownbeat = (beat: number) => beat % 8 === 0;
export const isPhrase = (beat: number) => beat % 32 === 0;
export const downbeats = filter(Boolean, currentBeat.map(isDownbeat));

stream.on(bpm => (Tone.Transport.bpm.value = bpm), BPM);

const isAudioPaused = stream.combine(
  (pause, isGameRunning) => pause() || !isGameRunning(),
  [pause, isGameRunning]
);

stream.on(async pauseState => {
  await Tone.start();
  if (pauseState) {
    Tone.Transport.pause(Tone.now());
  } else {
    Tone.Transport.start(Tone.now());
  }
}, isAudioPaused);

const effectGain = addMixer(gui, 'effect', -12);
const effectSynth = new Tone.PolySynth().connect(effectGain);
let effectPattern = generatePatterns(scale, 5, 6, 3).filter(note => note);

export const playSound = () => {
  if (Tone.context.state === 'running') {
    effectSynth.triggerAttackRelease(sample(effectPattern), '16n');
  }
};

const goodJobGain = addMixer(gui, 'good job', -13);
const goodJobDelay = new Tone.PingPongDelay('32n', 0.7).connect(goodJobGain);
goodJobDelay.set({
  wet: 1,
});
const goodJobSynth = new Tone.PolySynth(Tone.MonoSynth, {
  oscillator: { type: 'sine' },
  envelope: {
    attack: 0,
    release: 0.7,
  },
  filterEnvelope: {
    attack: 0,
  },
  detune: 3,
}).connect(goodJobDelay);
let goodJobPattern = generatePatterns(scale, 5, 6, 3).filter(note => note);
let goodJobPattern2 = generatePatterns(scale, 3, 4, 3).filter(note => note);
export const playGoodJobSound = () => {
  if (Tone.context.state === 'running') {
    goodJobSynth.triggerAttackRelease(
      [sample(goodJobPattern), sample(goodJobPattern2)],
      '8n'
    );
  }
};

/**
 *
 * Make Audio Go.
 */

export const initializeAudio = async () => {
  await Tone.start();
  scale = generateScale();
  effectPattern = generatePatterns(scale, 5, 6, 3).filter(note => note);
  goodJobPattern = generatePatterns(scale, 5, 6, 3).filter(note => note);
  goodJobPattern2 = generatePatterns(scale, 3, 4, 3).filter(note => note);

  /**
   * Setup Drums
   */
  const drumGain = addMixer(gui, 'Drums', -14);
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

  const hatGain = addMixer(gui, 'Hats', -14);
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

  /**
   * Setup Arp
   */
  const patterns = [
    generatePatterns(scale, 4, 5),
    generatePatterns(scale, 4, 4),
    generatePatterns(scale, 4, 5),
    generatePatterns(scale, 3, 5),
    generatePatterns(scale, 3, 6),
  ];

  const arpGain = addMixer(gui, 'arp', -19);
  const arpDelay = new Tone.FeedbackDelay('16n').connect(arpGain);
  const delayLFO = new Tone.LFO('4m', 0.25, 0.5).connect(arpDelay.wet);
  delayLFO.start(0);
  const arp = monoBassSynth().connect(arpDelay);
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

  /**
   * Setup Bass
   */

  const bassGain = addMixer(gui, 'bass', -15);
  const bass = monoBassSynth().connect(bassGain);
  const bassPattern = new Tone.Pattern(
    (time, note) => {
      bass.triggerAttackRelease(note, '2n', time);
    },
    generatePatterns(scale, 1, 2, 4),
    sample(['up', 'upDown'])
  );
  bassPattern.playbackRate = sample([0.25, 0.5, 1]);

  drumLoop.start(0);
  bassPattern.start(0);
  arpPattern.start(0);
  hatLoop.start(0);

  return () => {
    drumLoop.stop();
    bassPattern.stop();
    arpPattern.stop();
    hatLoop.stop();

    drumGain.dispose();
    hatGain.dispose();
    arpGain.dispose();
    bassGain.dispose();
  };
};

export const start = async () => {
  await Tone.start();
  startBeatCount();
  startBeatTime();
};

// Start audio on the first keydown event
const e = event(document, 'keydown');
stream.on(() => {
  start();
  e.end(true);
}, e);
