import { gui as baseGui } from './util';

const gui = baseGui.addFolder('Audio');
export const BPM = gui.auto(60, 'BPM');
