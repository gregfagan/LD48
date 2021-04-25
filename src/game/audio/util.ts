import * as Tone from 'tone';
import { stream } from '../../lib/stream';
import { AutoGUI } from '../../lib/gui';

export const addMixer = (
  gui: AutoGUI,
  name: string,
  defaultValue = 0.5
): Tone.Gain => {
  const gainNode = new Tone.Gain().toDestination();
  const value = gui.auto(defaultValue, name, 0, 1);
  stream.on((val: number) => gainNode.set({ gain: val }), value);
  return gainNode;
};
