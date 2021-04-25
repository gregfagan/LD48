import { dt, gui as baseGui } from './util';
import * as Tone from 'tone';
import { stream } from '../lib/stream';
import { dropRepeats } from 'flyd/module/droprepeats';

const gui = baseGui.addFolder('audio');

export const BPM = gui.auto(120, 'BPM', 60, 240);

const msToBeatTime = (ms: number) => (ms / 60) * BPM();

// Whole part is the beat count, fractional is counting to next beat
export const beatTime = stream.scan(
  (beat, next) => beat + msToBeatTime(next),
  0,
  dt
);

// Just emits on the beat
export const beat = dropRepeats(beatTime.map(Math.floor));

export const start = () => Tone.start();
const synth = new Tone.Synth().toDestination();

//play a middle 'C' for the duration of an 8th note
export const trigger = (beat: number) => {
  const now = Tone.now();
  synth.triggerAttackRelease(beat % 8 === 0 ? 'C5' : 'C4', '8n');
};
