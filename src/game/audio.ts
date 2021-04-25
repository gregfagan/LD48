import { gui as baseGui } from './util';

const gui = baseGui.addFolder('audio');
export const BPM = gui.auto(60, 'BPM');
