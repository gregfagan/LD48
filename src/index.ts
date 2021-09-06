import REGL from 'regl';
import Stats from 'stats.js';
import { stream } from './lib/stream';
import { clock, gui } from './game/util';
import { draw } from './game';
import { keypress } from './lib/stream/dom';
import { resize } from './game/ui';
import { createRenderScale } from './lib/gl/renderScale';

const canvas = document.getElementById('game') as HTMLCanvasElement;
const regl = REGL({ canvas });

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
  stream.scan(state => !state, true, keypress('t'))
);

const { renderer, mode, scale } = createRenderScale(regl, gui, draw);
scale(1);

let frames = 0;
let lastTime = clock();
const fps = stream<number>();
const tick = () => {
  frames++;
  const time = clock();

  if (time > lastTime + 1000) {
    fps((frames * 1000) / (time - lastTime));
    lastTime = time;
    frames = 0;
  }
};

const target = 57;
stream.on(frameRate => {
  let error = (target - frameRate) / target;
  if (error > 1) error = Math.pow(error, 16);
  console.log('scale error', error);
  // if (frameRate < 58) {
  // scale(scale() * 0.9);
  // } else if (frameRate > 60 && scale() < 1) {
  scale(Math.max(0.25, Math.min(1, scale() - error)));
  // }
  console.log(
    `performance: ${fps().toFixed(2)} fps ${scale().toFixed(3)} scale`
  );
}, fps);

stream.on(() => {
  regl.poll();
  tick();
  const render = renderer();
  render();
  stats.update();
}, clock);

const ro = new ResizeObserver(([entry]) => {
  resize(entry.contentRect);
  mode('linear');
});
ro.observe(document.body);
