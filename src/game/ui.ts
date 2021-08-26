import { stream } from '../lib/stream';
import { initialMovement, isGameRunning, state, wallCollisions } from './state';

const game = document.getElementById('game') as HTMLCanvasElement;
const layout = document.getElementById('layout');
const ui = document.getElementById('ui');
const texts = document.querySelectorAll<HTMLElement>('.ui');
const instructions = document.getElementById('instructions');

if (instructions) {
  instructions.textContent = `press ${initialMovement.toUpperCase()} to begin`;
}

export const resize = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => {
  if (!layout || !game) return;
  layout.style.opacity = '1';
  const min = Math.min(width, height);

  game.width = min * window.devicePixelRatio;
  game.height = min * window.devicePixelRatio;
  game.setAttribute('style', `width:${min}px;height:${min}px`);

  const blockSize = min / 16;
  const margin = blockSize * 2.5;
  const left = (width - min) / 2 + margin;
  const top = (height - min) / 2 + margin;
  layout.style.fontSize = `${blockSize / 2}px`;
  layout.style.borderRadius = `${blockSize / 8}px`;
  layout.style.left = `${left}px`;
  layout.style.top = `${top}px`;
  layout.style.maxWidth = `${min - 2 * margin}px`;
  layout.style.maxHeight = `${min - 2 * margin}px`;
  texts.forEach(el => (el.style.borderRadius = `${blockSize / 8}px`));
};

stream.on(isRunning => {
  if (!layout) return;
  layout.style.opacity = isRunning ? '0' : '1';
  if (isRunning) {
    texts.forEach(el => {
      if (el !== ui) el.style.visibility = 'hidden';
    });
  }
}, isGameRunning);

stream.on(() => {
  if (!ui) return;
  ui.textContent = `tetronim${'o'.repeat(state().currentBeat)}!`;
}, wallCollisions);
