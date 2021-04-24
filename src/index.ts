import REGL from 'regl';
import Stats from 'stats.js';
import { stream } from './lib/stream';
import { clock } from './game/util';
import { draw as game } from './game';

const regl = REGL();
const stats = new Stats();
stats.showPanel(0);
document.body.appendChild(stats.dom);

const render = regl(game);

stream.on(() => {
  regl.poll();
  render();
  stats.update();
}, clock);
