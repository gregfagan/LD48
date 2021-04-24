import { Regl } from 'regl';
import { quad } from '../lib/gl/config/quad';
import { sdf } from '../lib/gl/config/sdf';
import { glsl } from '../lib/gl/regl';
import { board } from './render';

export const draw = (regl: Regl) =>
  regl(glsl`
${quad}
${sdf}
${board(regl)}

void main() {
  gl_FragColor = vec4(colorBoard().xyz, 1.);
}
`);
