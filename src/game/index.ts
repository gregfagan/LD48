import { Regl } from 'regl';
import { glsl } from '../lib/gl/regl';
import { stream } from '../lib/stream';
import { example } from './board';
import { render } from './render';
import { clock } from './util';

export const draw = (regl: Regl) => {
  // create a board renderer
  const board = render(regl);

  // update the board when the clock ticks
  stream.on(() => board.update(example), clock);

  // return the draw command
  return regl(board.draw);
};
