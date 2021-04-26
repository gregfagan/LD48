import REGL from 'regl';
import Stats from 'stats.js';
import { stream } from './lib/stream';
import { clock, gui } from './game/util';
import { draw } from './game';
import { keypress } from './lib/stream/dom';
import { resize } from './game/ui';

const regl = REGL();
const stats = new Stats();
stats.showPanel(0);
document.body.appendChild(stats.dom);

stream.on(
  devUI => {
    stats.dom.style.visibility = devUI ? 'visible' : 'hidden';
    if (devUI) {
      gui.show();
    } else gui.hide();
  },
  stream.scan(state => !state, false, keypress('t'))
);

const render = regl(draw);

stream.on(() => {
  regl.poll();
  render();
  stats.update();
}, clock);

const ro = new ResizeObserver(([entry]) => {
  resize(entry.contentRect);
});
ro.observe(regl._gl.canvas);
