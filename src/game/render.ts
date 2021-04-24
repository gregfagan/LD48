import { flow } from 'fp-ts/lib/function';
import { DefaultContext, Regl, Vec2, Vec3, Vec4 } from 'regl';
import { toGLColor } from '../lib/gl/color';
import { quad } from '../lib/gl/config/quad';
import { sdf } from '../lib/gl/config/sdf';
import { glsl, uniform } from '../lib/gl/regl';
import { vec2 } from '../lib/math';
import { Stream } from '../lib/stream';
import {
  GameBoard,
  Grid,
  height,
  isTetronimo,
  Tetronimo,
  width,
} from './board';
import { gui as baseGui } from './util';

const gui = baseGui.addFolder('colors');

const textureSize: Vec2 = [16, 16];

type RenderBoard = Grid<Vec4, typeof textureSize[0], typeof textureSize[1]>;

const colorize = (board: GameBoard): RenderBoard =>
  board.map(row =>
    row.map(cell => (isTetronimo(cell) ? [...colors[cell](), 1] : [0, 0, 0, 0]))
  ) as RenderBoard;

const colors: Record<Tetronimo, Stream<Vec3>> = {
  I: gui.auto('#ff9b0d', 'I').map(toGLColor),
  J: gui.auto('#497bff', 'J').map(toGLColor),
  L: gui.auto('#ff5d5d', 'L').map(toGLColor),
  O: gui.auto('#00f0ff', 'O').map(toGLColor),
  S: gui.auto('#00ff86', 'S').map(toGLColor),
  T: gui.auto('#ff74d1', 'T').map(toGLColor),
  Z: gui.auto('#fffb51', 'Z').map(toGLColor),
};

export const render = (regl: Regl) => {
  let texture = regl.texture({
    min: 'nearest',
    mag: 'nearest',
    format: 'rgba',
    type: 'float32',
    shape: textureSize,
    wrap: 'repeat',
  });

  const update = flow(colorize, data => texture.subimage(data));

  const draw = glsl`
    ${quad}
    ${sdf}
    ${{
      uniforms: { board: texture },
      depth: { enable: false },
    }}

    uniform sampler2D board;
  
    vec4 colorBoard() {
      vec2 p = st() / 2. + 0.5;
      return vec4(texture2D(board, p * vec2(1, -1)).xyz, 1.);
    }

    void main() {
      gl_FragColor = colorBoard();
    }
  `;

  return { update, draw };
};
