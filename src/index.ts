import REGL from 'regl';
import Stats from 'stats.js';
import { stream } from './lib/stream';
import { clock } from './game/util';
import { render } from './game';

const regl = REGL({ extensions: ['OES_texture_float'] });
const stats = new Stats();
stats.showPanel(0);
document.body.appendChild(stats.dom);

const draw = render(regl);

stream.on(() => {
  regl.poll();
  draw();
  stats.update();
}, clock);
