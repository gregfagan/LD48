import { flow } from 'fp-ts/lib/function';
import { Regl, Vec3, Vec4 } from 'regl';
import { toGLColor } from '../lib/gl/color';
import { quad } from '../lib/gl/config/quad';
import { sdf } from '../lib/gl/config/sdf';
import { glsl } from '../lib/gl/regl';
import { Stream } from '../lib/stream';
import { GameBoard, Grid, isTetronimo, Tetronimo } from './board';
import { gui as baseGui } from './util';

const gui = baseGui.addFolder('colors');
const textureWidth = 16;
const textureHeight = 16;

type RenderBoard = Grid<Vec4, typeof textureWidth, typeof textureHeight>;

const colorize = (board: GameBoard): RenderBoard =>
  board.map(row =>
    row.map(cell =>
      isTetronimo(cell) ? [...colors[cell]?.(), 1] : [0, 0, 0, 0]
    )
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
    width: textureWidth,
    height: textureHeight,
  });

  const update = flow(colorize, data => texture.subimage(data));

  const draw = glsl`
    ${quad}
    ${sdf}

    ${{ uniforms: { board: texture }, depth: { enable: false } }}
    uniform sampler2D board;

    vec4 colorBoard() {
      // texture is vertically flipped from the 2D array
      vec2 p = st() * vec2(1., -1.) / 2. + 0.5;
      return texture2D(board, p);
    }

    void main() {
      gl_FragColor = vec4(colorBoard().xyz, 1.);
    }
  `;

  return { update, draw };
};
