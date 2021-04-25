import { gui as baseGui } from './util';
import * as Tone from 'tone';

const gui = baseGui.addFolder('audio');
export const BPM = gui.auto(120, 'BPM', 60, 240);

export const start = () => Tone.start();

//play a middle 'C' for the duration of an 8th note
export const trigger = (beat: number) => {
  const synth = new Tone.Synth().toDestination();
  const now = Tone.now();
  // trigger the attack immediately

  synth.triggerAttackRelease(beat % 8 === 0 ? 'C5' : 'C4', '8n');
};
