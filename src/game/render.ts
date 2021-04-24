import { flow } from 'fp-ts/lib/function';
import { Regl, Vec3, Vec4 } from 'regl';
import { toGLColor } from '../lib/gl/color';
import { glsl } from '../lib/gl/regl';
import { Stream } from '../lib/stream';
import {
  example,
  GameBoard,
  Grid,
  height,
  isTetronimo,
  ResizedGrid,
  Tetronimo,
  width,
} from './board';
import { gui as baseGui } from './util';

const gui = baseGui.addFolder('colors');
const textureWidth = 8;
const textureHeight = 8;

type TextureSizedBoard = ResizedGrid<
  GameBoard,
  typeof textureWidth,
  typeof textureHeight
>;
type RenderBoard = Grid<Vec4, typeof textureWidth, typeof textureHeight>;

const textureFit = (board: GameBoard): TextureSizedBoard => {
  const empty = 0;
  const extraColumns = new Array(textureWidth - width).fill(empty);
  const extraRows = new Array(textureHeight - height).fill(
    new Array(textureWidth).fill(empty)
  );
  return [
    ...board.map(column => [...column, ...extraColumns]),
    ...extraRows,
  ] as TextureSizedBoard;
};

const colorize = (board: TextureSizedBoard): RenderBoard =>
  board.map(row =>
    row.map(cell =>
      isTetronimo(cell) ? [...colors[cell]?.(), 1] : [0, 0, 0, 0]
    )
  ) as RenderBoard;

const colors: Record<Tetronimo, Stream<Vec3>> = {
  I: gui.auto('#ffcc00', 'I').map(toGLColor),
  J: gui.auto('#ffcc00', 'J').map(toGLColor),
  L: gui.auto('#ffcc00', 'L').map(toGLColor),
  O: gui.auto('#ffcc00', 'O').map(toGLColor),
  S: gui.auto('#ffcc00', 'S').map(toGLColor),
  T: gui.auto('#ffcc00', 'T').map(toGLColor),
  Z: gui.auto('#ffcc00', 'Z').map(toGLColor),
};

const makeRenderable = flow(textureFit, colorize);

export const board = (regl: Regl) => {
  const texture = regl.texture({
    min: 'nearest',
    mag: 'nearest',
    format: 'rgba',
    type: 'float32',
    width: textureWidth,
    height: textureHeight,
    data: makeRenderable(example),
  });

  const fbo = regl.framebuffer({
    depth: false,
    color: texture,
  });

  return glsl`
  ${{ uniforms: { board: fbo } }}
  uniform sampler2D board;
  vec4 colorBoard() {
    // texture is vertically flipped from the 2D array
    vec2 p = st() * vec2(1., -1.) / 2. + 0.5;
    return texture2D(board, p);
  }
`;
};
